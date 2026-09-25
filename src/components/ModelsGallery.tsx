import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { X } from 'lucide-react'
import { Shell, PageHeader } from './Shell'
import { AR_MODEL_CATALOG, ArScene, HotspotSheet, type HotspotInfo } from './ArModels'
import { ModelThumbArt } from './ModelThumbArt'
import { t } from '../i18n'
import { useStore } from '../store'
import type { OverlayType } from '../types'

function LiveViewer({
  type,
  dragHint,
  tall,
}: {
  type: OverlayType
  dragHint: string
  tall?: boolean
}) {
  const [hotspot, setHotspot] = useState<HotspotInfo | null>(null)

  useEffect(() => {
    setHotspot(null)
  }, [type])

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0c0d0e] ${
        tall
          ? 'h-full min-h-[55vh] rounded-none'
          : 'h-[280px] rounded-xl border border-line sm:h-auto sm:aspect-[16/10] lg:aspect-[21/9] lg:max-h-[480px]'
      }`}
    >
      <Canvas
        camera={{ position: [0, 0.3, 5.2], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor('#0c0d0e')}
        style={{ touchAction: 'none' }}
      >
        <color attach="background" args={['#0c0d0e']} />
        <ambientLight intensity={1} />
        <directionalLight position={[4, 6, 3]} intensity={1.4} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <pointLight position={[0, 2, 3]} color="#e8a317" intensity={0.55} />
        <Suspense fallback={null}>
          <group scale={0.9}>
            <ArScene type={type} onHotspotSelect={setHotspot} />
          </group>
          <ContactShadows position={[0, -1.15, 0]} opacity={0.35} scale={8} blur={2.2} far={3} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          autoRotate={!hotspot}
          autoRotateSpeed={1.05}
          target={[0, 0, 0]}
        />
      </Canvas>
      <div className="pointer-events-none absolute left-2 top-2 rounded border border-line bg-ink/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-soft sm:left-3 sm:top-3">
        Live 3D · {type}
      </div>
      {!hotspot && (
        <div className="pointer-events-none absolute bottom-2 left-2 right-2 flex flex-wrap items-end justify-between gap-2 sm:bottom-3 sm:left-3 sm:right-3">
          <div className="rounded border border-safety/40 bg-ink/90 px-2.5 py-1 text-[10px] font-semibold text-sand">
            Tap small ● numbers to learn
          </div>
          <div className="hidden rounded bg-ink/80 px-2.5 py-1 text-[10px] text-muted sm:block">{dragHint}</div>
        </div>
      )}
      <HotspotSheet info={hotspot} onClose={() => setHotspot(null)} />
    </div>
  )
}

function ModelCard({
  type,
  active,
  title,
  module,
  onSelect,
}: {
  type: OverlayType
  active: boolean
  title: string
  module: string
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group overflow-hidden rounded-xl border text-left transition ${
        active
          ? 'border-safety shadow-[0_0_0_1px_rgba(232,163,23,0.35)]'
          : 'border-line hover:border-line-strong'
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0d0e]">
        <div className="absolute inset-0 [&_svg]:h-full [&_svg]:w-full">
          <ModelThumbArt type={type} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-2.5 pb-2 pt-8 sm:px-3 sm:pb-2.5 sm:pt-10">
          <div className="truncate text-[9px] font-semibold uppercase tracking-wider text-sand/70 sm:text-[10px]">
            {module}
          </div>
          <div className="truncate text-[12px] font-semibold text-bone sm:text-sm">{title}</div>
        </div>
        <span className="absolute right-1.5 top-1.5 rounded bg-ink/80 px-1.5 py-0.5 text-[9px] font-semibold text-sand sm:hidden">
          Open
        </span>
        {active && (
          <span className="absolute left-1.5 top-1.5 hidden rounded bg-safety px-1.5 py-0.5 text-[9px] font-bold text-ink sm:left-auto sm:right-2 sm:top-2 sm:block sm:px-2 sm:text-[10px]">
            LIVE
          </span>
        )}
      </div>
    </button>
  )
}

/** Full-screen popup for mobile — tap thumbnail → 3D + hotspots. */
function ModelPopup({
  type,
  title,
  module,
  dragHint,
  onClose,
}: {
  type: OverlayType
  title: string
  module: string
  dragHint: string
  onClose: () => void
}) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-sm sm:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-line px-3 py-3">
        <div className="min-w-0 flex-1">
          <div className="truncate text-[10px] font-semibold uppercase tracking-wider text-muted">{module}</div>
          <div className="truncate text-sm font-semibold text-bone">{title}</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-soft"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="min-h-0 flex-1">
        <LiveViewer type={type} dragHint={dragHint} tall />
      </div>
      <p className="shrink-0 px-3 py-2.5 text-center text-[11px] text-muted">
        Pinch / drag to rotate · tap ● for details
      </p>
    </div>
  )
}

export function ModelsGallery() {
  const { language } = useStore()
  const [active, setActive] = useState<OverlayType>(AR_MODEL_CATALOG[0]?.type ?? 'exit')
  const [popupOpen, setPopupOpen] = useState(false)
  const current = AR_MODEL_CATALOG.find((m) => m.type === active) ?? AR_MODEL_CATALOG[0]
  const [viewerKey, setViewerKey] = useState(0)

  useEffect(() => {
    setViewerKey((k) => k + 1)
  }, [active])

  const openModel = (type: OverlayType) => {
    setActive(type)
    // Mobile: open popup; desktop uses inline viewer (sm+)
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches) {
      setPopupOpen(true)
    }
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-7xl px-4 py-5 pb-24 sm:px-6 sm:py-10 sm:pb-10">
        <PageHeader
          eyebrow={t('assetLib', language)}
          title={t('modelsTitle', language)}
          description={t('modelsDesc', language)}
        />

        <section className="mt-5 sm:mt-8">
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              All models · tap image to open
            </h3>
            <span className="text-[11px] font-medium text-safety">{AR_MODEL_CATALOG.length} total</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:hidden">
            {AR_MODEL_CATALOG.map((m) => (
              <ModelCard
                key={`m-${m.type}`}
                type={m.type}
                active={active === m.type && popupOpen}
                title={m.name[language]}
                module={m.module[language]}
                onSelect={() => openModel(m.type)}
              />
            ))}
          </div>

          <div className="hidden gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AR_MODEL_CATALOG.map((m) => (
              <ModelCard
                key={m.type}
                type={m.type}
                active={active === m.type}
                title={m.name[language]}
                module={m.module[language]}
                onSelect={() => setActive(m.type)}
              />
            ))}
          </div>
        </section>

        {/* Desktop / tablet inline stage */}
        <section id="live-model-stage" className="mt-6 hidden scroll-mt-4 sm:mt-8 sm:block">
          {current && (
            <div className="mb-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                {current.module[language]}
              </div>
              <h2 className="font-display text-lg text-bone sm:text-2xl">{current.name[language]}</h2>
              <p className="mt-0.5 font-mono text-[11px] text-muted">{current.type}</p>
            </div>
          )}
          <LiveViewer key={viewerKey} type={active} dragHint={t('dragOrbit', language)} />
        </section>

        {/* Mobile hint */}
        <p className="mt-4 text-center text-xs text-muted sm:hidden">
          Tap any model image — 3D opens in a popup
        </p>
      </main>

      {popupOpen && current && (
        <ModelPopup
          key={active}
          type={active}
          title={current.name[language]}
          module={current.module[language]}
          dragHint={t('dragOrbit', language)}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </Shell>
  )
}

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { Shell, PageHeader } from './Shell'
import { AR_MODEL_CATALOG, ArScene } from './ArModels'
import { ModelThumbArt } from './ModelThumbArt'
import { t } from '../i18n'
import { useStore } from '../store'
import type { OverlayType } from '../types'

function LiveViewer({ type, dragHint }: { type: OverlayType; dragHint: string }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-[#0c0d0e] sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[480px]">
      <Canvas
        camera={{ position: [0, 0.4, 4.6], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor('#0c0d0e')}
      >
        <color attach="background" args={['#0c0d0e']} />
        <ambientLight intensity={1} />
        <directionalLight position={[4, 6, 3]} intensity={1.4} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <pointLight position={[0, 2, 3]} color="#e8a317" intensity={0.55} />
        <Suspense fallback={null}>
          <ArScene type={type} />
          <ContactShadows
            position={[0, -1.15, 0]}
            opacity={0.35}
            scale={8}
            blur={2.2}
            far={3}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={2.8}
          maxDistance={7}
          autoRotate
          autoRotateSpeed={1.05}
          target={[0, 0, 0]}
        />
      </Canvas>
      <div className="pointer-events-none absolute left-3 top-3 rounded border border-line bg-ink/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-soft">
        Live 3D · {type}
      </div>
      <div className="pointer-events-none absolute bottom-3 right-3 rounded bg-ink/80 px-2.5 py-1 text-[10px] text-muted">
        {dragHint}
      </div>
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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-3 pb-2.5 pt-10">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-sand/70">
            {module}
          </div>
          <div className="truncate text-sm font-semibold text-bone sm:text-[0.95rem]">
            {title}
          </div>
        </div>
        {active && (
          <span className="absolute right-2 top-2 rounded bg-safety px-2 py-0.5 text-[10px] font-bold text-ink">
            LIVE
          </span>
        )}
      </div>
    </button>
  )
}

export function ModelsGallery() {
  const { language } = useStore()
  const [active, setActive] = useState<OverlayType>(AR_MODEL_CATALOG[0]?.type ?? 'exit')
  const current = AR_MODEL_CATALOG.find((m) => m.type === active) ?? AR_MODEL_CATALOG[0]
  const [viewerKey, setViewerKey] = useState(0)

  useEffect(() => {
    setViewerKey((k) => k + 1)
  }, [active])

  return (
    <Shell solid>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <PageHeader
          eyebrow={t('assetLib', language)}
          title={t('modelsTitle', language)}
          description={t('modelsDesc', language)}
        />

        {/* Live stage — full width on laptop */}
        <section className="mt-6 sm:mt-8">
          <LiveViewer
            key={viewerKey}
            type={active}
            dragHint={t('dragOrbit', language)}
          />
          {current && (
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {current.module[language]}
                </div>
                <h2 className="font-display text-xl text-bone sm:text-2xl">
                  {current.name[language]}
                </h2>
                <p className="mt-1 font-mono text-xs text-muted">{current.type}</p>
              </div>
              <p className="text-xs text-muted sm:text-sm">
                {AR_MODEL_CATALOG.length} models · select a card below
              </p>
            </div>
          )}
        </section>

        {/* Image grid — mobile 2 / tablet 3 / laptop 4 */}
        <section className="mt-5 sm:mt-6">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              Tap image to preview
            </h3>
          </div>

          {/* Mobile horizontal strip */}
          <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:hidden [scrollbar-width:thin]">
            {AR_MODEL_CATALOG.map((m) => (
              <div key={`h-${m.type}`} className="w-[200px] shrink-0">
                <ModelCard
                  type={m.type}
                  active={active === m.type}
                  title={m.name[language]}
                  module={m.module[language]}
                  onSelect={() => setActive(m.type)}
                />
              </div>
            ))}
          </div>

          {/* Tablet + laptop grid */}
          <div className="hidden gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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
      </main>
    </Shell>
  )
}

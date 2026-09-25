import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows, Html } from '@react-three/drei'
import { DoubleSide, type Group } from 'three'
import type { Lang, OverlayType } from '../types'
import { MODEL_HOTSPOTS } from '../data/modelHotspots'
import { useStore } from '../store'

function SpinSlow({ children, speed = 0.4 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<Group>(null)
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * speed
  })
  return <group ref={ref}>{children}</group>
}

function Bob({ children, amp = 0.08 }: { children: React.ReactNode; amp?: number }) {
  const ref = useRef<Group>(null)
  useFrame(({ clock }) => {
    if (ref.current) ref.current.position.y = Math.sin(clock.elapsedTime * 1.6) * amp
  })
  return <group ref={ref}>{children}</group>
}

function Label({
  children,
  y = 0,
  size = 0.14,
  color = '#f5b800',
}: {
  children: string
  y?: number
  size?: number
  color?: string
}) {
  return (
    <Html position={[0, y, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
      <div
        style={{
          color,
          fontSize: Math.max(11, size * 90),
          fontWeight: 700,
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          textShadow: '0 1px 4px rgba(0,0,0,0.85)',
          fontFamily: 'Barlow, sans-serif',
        }}
      >
        {children}
      </div>
    </Html>
  )
}

/** Numbered marker — small 3D dot so the model stays visible; tap opens info sheet. */
export type HotspotInfo = { n: number; title: string; body: string }

function HotspotMarker({
  n,
  position,
  title,
  open,
  onToggle,
}: {
  n: number
  position: [number, number, number]
  title: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <group position={position}>
      {/* Invisible larger hit area for easy tap */}
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <sphereGeometry args={[0.16, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={open ? '#f5b800' : '#1c1914'} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.078, 16, 16]} />
        <meshBasicMaterial color={open ? '#f5b800' : '#ffffff'} wireframe transparent opacity={0.85} />
      </mesh>
      <Html center distanceFactor={14} style={{ pointerEvents: 'none' }} zIndexRange={[100, 0]}>
        <div
          aria-label={`${n}. ${title}`}
          style={{
            width: 14,
            height: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 9,
            fontWeight: 800,
            color: open ? '#14110d' : '#fff',
            fontFamily: 'Barlow, system-ui, sans-serif',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {n}
        </div>
      </Html>
    </group>
  )
}

function ModelHotspots({
  type,
  language,
  onSelect,
}: {
  type: OverlayType
  language: Lang
  onSelect?: (info: HotspotInfo | null) => void
}) {
  const [active, setActive] = useState<number | null>(null)
  const points = MODEL_HOTSPOTS[type] ?? []

  useEffect(() => {
    setActive(null)
    onSelect?.(null)
  }, [type]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!points.length) return null

  return (
    <group>
      {points.map((p) => {
        const title = p.title[language] || p.title.en
        const body = p.body[language] || p.body.en
        const open = active === p.n
        return (
          <HotspotMarker
            key={p.n}
            n={p.n}
            position={p.position}
            title={title}
            open={open}
            onToggle={() => {
              const next = open ? null : p.n
              setActive(next)
              onSelect?.(next == null ? null : { n: p.n, title, body })
            }}
          />
        )
      })}
    </group>
  )
}

/** Bottom info card — readable on phone, same dark-card look as the reference. */
export function HotspotSheet({
  info,
  onClose,
}: {
  info: HotspotInfo | null
  onClose: () => void
}) {
  if (!info) return null
  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-0 z-30 p-2.5 sm:p-4" role="dialog" aria-label={info.title}>
      <div className="mx-auto w-full max-w-lg rounded-xl border border-white/15 bg-[#16181c]/96 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-safety text-sm font-extrabold text-ink">
            {info.n}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[0.95rem] font-bold leading-snug text-white">{info.title}</div>
            <p className="mt-1.5 text-[12.5px] leading-relaxed text-bone/85">{info.body}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-safety hover:bg-white/5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function ExitSignModel({ label = 'EXIT' }: { label?: string }) {
  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group>
        <mesh>
          <boxGeometry args={[1.6, 0.7, 0.08]} />
          <meshStandardMaterial color="#0d3b2e" metalness={0.2} roughness={0.45} />
        </mesh>
        <mesh position={[0, 0, 0.05]}>
          <boxGeometry args={[1.45, 0.55, 0.02]} />
          <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.55} />
        </mesh>
        <Label y={0} size={0.28} color="#04140e">
          {label}
        </Label>
        <mesh position={[0.95, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.18, 0.35, 3]} />
          <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

function ExtinguisherModel() {
  return (
    <SpinSlow speed={0.55}>
      <group>
        <mesh>
          <cylinderGeometry args={[0.35, 0.38, 1.6, 24]} />
          <meshStandardMaterial color="#c4452d" metalness={0.55} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.9, 0]}>
          <sphereGeometry args={[0.36, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#8f2f1c" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.15, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.25, 12]} />
          <meshStandardMaterial color="#2a2318" metalness={0.8} />
        </mesh>
        <mesh position={[0.15, 1.28, 0]} rotation={[0, 0, 0.4]}>
          <torusGeometry args={[0.18, 0.035, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#1a1510" metalness={0.7} />
        </mesh>
        <mesh position={[0.42, 0.55, 0]} rotation={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.04, 0.04, 0.9, 8]} />
          <meshStandardMaterial color="#1a1510" />
        </mesh>
        <mesh position={[0.7, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.08, 0.22, 10]} />
          <meshStandardMaterial color="#4a4338" metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.381, 0.381, 0.35, 24]} />
          <meshStandardMaterial color="#f5b800" />
        </mesh>
        <Label y={0.15} size={0.14} color="#14110d">
          CO₂
        </Label>
        <Label y={-1.05} size={0.12}>
          P · A · S · S
        </Label>
      </group>
    </SpinSlow>
  )
}

function EvacuateModel() {
  return (
    <group>
      <Bob>
        <mesh position={[-1.4, 0.6, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.2]} />
          <meshStandardMaterial color="#f5b800" emissive="#f5b800" emissiveIntensity={0.6} />
        </mesh>
        <group position={[-1.4, 0, 0]}>
          <Label y={1.15} size={0.16}>
            1 ALARM
          </Label>
        </group>
      </Bob>
      <mesh position={[-0.45, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 16]} />
        <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.35, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 16]} />
        <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.5} />
      </mesh>
      <Float speed={1.5} floatIntensity={0.3}>
        <group position={[1.3, 0.2, 0]}>
          <mesh>
            <boxGeometry args={[0.7, 0.9, 0.12]} />
            <meshStandardMaterial color="#0d3b2e" />
          </mesh>
          <Label y={0} size={0.14} color="#19f08b">
            EXIT
          </Label>
          <Label y={1.0} size={0.14}>
            2 → 3 MUSTER
          </Label>
        </group>
      </Float>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[3.2, 0.06, 0.35]} />
        <meshStandardMaterial color="#f5b800" transparent opacity={0.55} />
      </mesh>
    </group>
  )
}

function HazardZoneModel() {
  return (
    <group>
      <SpinSlow speed={0.25}>
        <mesh position={[-1.2, 0, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 1.4, 20]} />
          <meshStandardMaterial color="#c4452d" metalness={0.5} />
        </mesh>
        <mesh position={[-1.2, 0.85, 0]}>
          <cylinderGeometry args={[0.12, 0.18, 0.3, 12]} />
          <meshStandardMaterial color="#2a2318" metalness={0.8} />
        </mesh>
      </SpinSlow>
      <mesh position={[-1.2, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 0.85, 32]} />
        <meshStandardMaterial color="#c4452d" emissive="#c4452d" emissiveIntensity={0.45} side={DoubleSide} />
      </mesh>
      <mesh position={[0.1, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.7, 1.05, 32]} />
        <meshStandardMaterial color="#f5b800" emissive="#f5b800" emissiveIntensity={0.35} side={DoubleSide} />
      </mesh>
      <mesh position={[1.5, -0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 0.85, 32]} />
        <meshStandardMaterial color="#2d6a4f" emissive="#2d6a4f" emissiveIntensity={0.4} side={DoubleSide} />
      </mesh>
      <group position={[-1.2, 0, 0]}>
        <Label y={1.3} size={0.18} color="#ff6b4a">
          HOT
        </Label>
      </group>
      <group position={[0.1, 0, 0]}>
        <Label y={0.6} size={0.16}>
          WARM
        </Label>
      </group>
      <group position={[1.5, 0, 0]}>
        <Label y={0.4} size={0.16} color="#7dcea0">
          COLD
        </Label>
      </group>
    </group>
  )
}

function PpeKitModel() {
  return (
    <group>
      <Float speed={1.8} floatIntensity={0.35}>
        <group position={[-1.2, 0.3, 0]}>
          <mesh>
            <sphereGeometry args={[0.45, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.6]} />
            <meshStandardMaterial color="#f5b800" metalness={0.35} />
          </mesh>
          <mesh position={[0, -0.15, 0.35]}>
            <boxGeometry args={[0.5, 0.12, 0.15]} />
            <meshStandardMaterial color="#f5b800" />
          </mesh>
          <Label y={-0.7} size={0.12}>
            HELMET
          </Label>
        </group>
      </Float>
      <SpinSlow speed={0.7}>
        <group position={[0, 0.1, 0]}>
          <mesh>
            <boxGeometry args={[0.45, 0.7, 0.2]} />
            <meshStandardMaterial color="#2c261e" metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.15, 0.11]}>
            <boxGeometry args={[0.28, 0.22, 0.02]} />
            <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.7} />
          </mesh>
          <Label y={-0.65} size={0.11} color="#19f08b">
            DETECTOR
          </Label>
        </group>
      </SpinSlow>
      <Float speed={2.2} floatIntensity={0.25}>
        <group position={[1.2, 0.15, 0]}>
          <mesh>
            <torusGeometry args={[0.35, 0.06, 10, 24]} />
            <meshStandardMaterial color="#c4452d" />
          </mesh>
          <mesh position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.28, 0.05, 10, 24]} />
            <meshStandardMaterial color="#8f2f1c" />
          </mesh>
          <Label y={-0.75} size={0.11} color="#ff8a70">
            HARNESS
          </Label>
        </group>
      </Float>
    </group>
  )
}

function BuddySystemModel() {
  const Person = ({ color, x, label }: { color: string; x: number; label: string }) => (
    <group position={[x, 0, 0]}>
      <mesh position={[0, 0.85, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color="#e8dfd0" />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <capsuleGeometry args={[0.22, 0.55, 6, 12]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.18, -0.55, 0]}>
        <capsuleGeometry args={[0.08, 0.35, 4, 8]} />
        <meshStandardMaterial color="#2a2318" />
      </mesh>
      <mesh position={[0.18, -0.55, 0]}>
        <capsuleGeometry args={[0.08, 0.35, 4, 8]} />
        <meshStandardMaterial color="#2a2318" />
      </mesh>
      <Label y={1.35} size={0.12}>
        {label}
      </Label>
    </group>
  )
  return (
    <group>
      <Person color="#2d6a4f" x={-1.1} label="ATTENDANT" />
      <Bob amp={0.05}>
        <mesh position={[0, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.55, 0.025, 8, 32, Math.PI]} />
          <meshStandardMaterial color="#f5b800" emissive="#f5b800" emissiveIntensity={0.6} />
        </mesh>
      </Bob>
      <Person color="#c4452d" x={1.1} label="ENTRANT" />
      <Label y={-1.0} size={0.13} color="#e8dfd0">
        Signal every 2 min
      </Label>
    </group>
  )
}

function AlarmModel() {
  return (
    <Bob amp={0.12}>
      <group>
        <mesh>
          <cylinderGeometry args={[0.55, 0.55, 0.25, 24]} />
          <meshStandardMaterial color="#c4452d" metalness={0.4} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.35, 0.45, 0.2, 24]} />
          <meshStandardMaterial color="#f5b800" emissive="#f5b800" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#fff5cc" emissive="#f5b800" emissiveIntensity={1.2} />
        </mesh>
        <Label y={-0.7} size={0.16}>
          FIRE ALARM
        </Label>
      </group>
    </Bob>
  )
}

function AssemblyModel() {
  return (
    <Float speed={1.4} floatIntensity={0.25}>
      <group>
        <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.9, 1.35, 40]} />
          <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.35} side={DoubleSide} />
        </mesh>
        <mesh>
          <boxGeometry args={[1.4, 0.9, 0.1]} />
          <meshStandardMaterial color="#0d3b2e" />
        </mesh>
        <Label y={0} size={0.18} color="#19f08b">
          ASSEMBLY
        </Label>
        <Label y={-1.15} size={0.12} color="#e8dfd0">
          MUSTER POINT
        </Label>
      </group>
    </Float>
  )
}

function SmokeCrawlModel() {
  return (
    <group>
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[3.2, 0.08, 1.2]} />
        <meshStandardMaterial color="#3d444c" />
      </mesh>
      {[ -1, 0, 1 ].map((x) => (
        <mesh key={x} position={[x, -0.35, 0]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.35, 0.12, 0.7]} />
          <meshStandardMaterial color="#f5b800" emissive="#f5b800" emissiveIntensity={0.3} />
        </mesh>
      ))}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.9, 16, 12]} />
        <meshStandardMaterial color="#4a4338" transparent opacity={0.35} />
      </mesh>
      <Label y={1.2} size={0.15}>
        STAY LOW
      </Label>
      <Label y={-1.15} size={0.12} color="#e8dfd0">
        Crawl under smoke
      </Label>
    </group>
  )
}

function FireBlanketModel() {
  return (
    <SpinSlow speed={0.35}>
      <group>
        <mesh>
          <boxGeometry args={[1.4, 1.0, 0.08]} />
          <meshStandardMaterial color="#c4452d" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.05]}>
          <boxGeometry args={[1.15, 0.75, 0.02]} />
          <meshStandardMaterial color="#8f2f1c" />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <boxGeometry args={[0.3, 0.15, 0.12]} />
          <meshStandardMaterial color="#f5b800" />
        </mesh>
        <Label y={-0.85} size={0.14}>
          FIRE BLANKET
        </Label>
      </group>
    </SpinSlow>
  )
}

function GasMeterModel() {
  return (
    <Float speed={2} floatIntensity={0.3}>
      <group>
        <mesh>
          <boxGeometry args={[0.7, 1.0, 0.28]} />
          <meshStandardMaterial color="#1c1f22" metalness={0.6} />
        </mesh>
        <mesh position={[0, 0.2, 0.15]}>
          <circleGeometry args={[0.22, 24]} />
          <meshStandardMaterial color="#19f08b" emissive="#0aff7a" emissiveIntensity={0.9} />
        </mesh>
        <mesh position={[-0.18, -0.25, 0.15]}>
          <boxGeometry args={[0.18, 0.1, 0.02]} />
          <meshStandardMaterial color="#f5b800" />
        </mesh>
        <mesh position={[0.18, -0.25, 0.15]}>
          <boxGeometry args={[0.18, 0.1, 0.02]} />
          <meshStandardMaterial color="#c4452d" emissive="#c4452d" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.25, 10]} />
          <meshStandardMaterial color="#7a8b99" metalness={0.8} />
        </mesh>
        <Label y={-0.85} size={0.13}>
          4-GAS METER
        </Label>
      </group>
    </Float>
  )
}

function RespiratorModel() {
  return (
    <SpinSlow speed={0.45}>
      <group>
        <mesh>
          <sphereGeometry args={[0.45, 20, 16, 0, Math.PI * 2, 0, Math.PI / 1.5]} />
          <meshStandardMaterial color="#2c261e" roughness={0.5} />
        </mesh>
        <mesh position={[-0.35, 0, 0.25]} rotation={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.2, 16]} />
          <meshStandardMaterial color="#3d444c" metalness={0.5} />
        </mesh>
        <mesh position={[0.35, 0, 0.25]} rotation={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.2, 16]} />
          <meshStandardMaterial color="#3d444c" metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.15, 0.4]}>
          <boxGeometry args={[0.25, 0.18, 0.15]} />
          <meshStandardMaterial color="#1a1510" />
        </mesh>
        <Label y={-0.85} size={0.13}>
          RESPIRATOR
        </Label>
      </group>
    </SpinSlow>
  )
}

function TripodModel() {
  return (
    <group>
      {[ -0.7, 0, 0.7 ].map((x, i) => (
        <mesh key={i} position={[x * 0.85, -0.1, Math.abs(x) * 0.3]} rotation={[0.35, 0, x * 0.25]}>
          <cylinderGeometry args={[0.04, 0.04, 2.2, 8]} />
          <meshStandardMaterial color="#f5b800" metalness={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 0.95, 0]}>
        <torusGeometry args={[0.22, 0.05, 8, 20]} />
        <meshStandardMaterial color="#c4452d" metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.4, 8]} />
        <meshStandardMaterial color="#e8dfd0" />
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[0.35, 0.45, 0.2]} />
        <meshStandardMaterial color="#2d6a4f" />
      </mesh>
      <Label y={1.35} size={0.13}>
        RESCUE TRIPOD
      </Label>
    </group>
  )
}

function VentilationModel() {
  const blade = useRef<Group>(null)
  useFrame((_, dt) => {
    if (blade.current) blade.current.rotation.z += dt * 4
  })
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.85, 0.9, 0.35, 24]} />
        <meshStandardMaterial color="#3d444c" metalness={0.55} />
      </mesh>
      <group ref={blade}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
            <boxGeometry args={[1.3, 0.18, 0.06]} />
            <meshStandardMaterial color="#f5b800" />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#1a1510" />
      </mesh>
      <Label y={-1.05} size={0.13}>
        FORCED VENTILATION
      </Label>
    </group>
  )
}

function LotoModel() {
  return (
    <Float speed={1.6} floatIntensity={0.35}>
      <group>
        <mesh>
          <boxGeometry args={[0.55, 0.85, 0.15]} />
          <meshStandardMaterial color="#c4452d" metalness={0.3} />
        </mesh>
        <mesh position={[0, 0.55, 0]}>
          <torusGeometry args={[0.18, 0.05, 8, 16]} />
          <meshStandardMaterial color="#f5b800" metalness={0.7} />
        </mesh>
        <mesh position={[0.35, 0.15, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.12, 0.45, 0.08]} />
          <meshStandardMaterial color="#1a1510" />
        </mesh>
        <Label y={0} size={0.14} color="#fff">
          LOTO
        </Label>
        <Label y={-0.85} size={0.12}>
          LOCK · TAG · TRY
        </Label>
      </group>
    </Float>
  )
}

function ConveyorGuardModel() {
  return (
    <group>
      <mesh position={[0, -0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.25, 0.25, 2.8, 16]} />
        <meshStandardMaterial color="#4a4338" metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.15, 0.35]}>
        <boxGeometry args={[2.6, 0.9, 0.06]} />
        <meshStandardMaterial color="#f5b800" transparent opacity={0.55} wireframe />
      </mesh>
      <mesh position={[-1.1, 0.15, 0.35]}>
        <boxGeometry args={[0.08, 0.9, 0.08]} />
        <meshStandardMaterial color="#f5b800" />
      </mesh>
      <mesh position={[1.1, 0.15, 0.35]}>
        <boxGeometry args={[0.08, 0.9, 0.08]} />
        <meshStandardMaterial color="#f5b800" />
      </mesh>
      <Label y={0.95} size={0.13}>
        MACHINE GUARD
      </Label>
    </group>
  )
}

function BarrierModel() {
  return (
    <group>
      <mesh position={[-1.2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 1.6, 10]} />
        <meshStandardMaterial color="#c4452d" />
      </mesh>
      <mesh position={[1.2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 1.6, 10]} />
        <meshStandardMaterial color="#c4452d" />
      </mesh>
      {[0.35, 0, -0.35].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[0, 0, 0.08 * (i % 2 ? 1 : -1)]}>
          <boxGeometry args={[2.5, 0.14, 0.06]} />
          <meshStandardMaterial color={i % 2 ? '#f5b800' : '#1a1510'} />
        </mesh>
      ))}
      <Label y={1.1} size={0.13}>
        CAUTION BARRIER
      </Label>
    </group>
  )
}

function CapLampModel() {
  return (
    <Float speed={2} floatIntensity={0.3}>
      <group>
        <mesh>
          <sphereGeometry args={[0.42, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.55]} />
          <meshStandardMaterial color="#f5b800" metalness={0.35} />
        </mesh>
        <mesh position={[0, 0.05, 0.4]}>
          <cylinderGeometry args={[0.14, 0.18, 0.22, 16]} />
          <meshStandardMaterial color="#2c261e" metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.05, 0.55]}>
          <circleGeometry args={[0.12, 16]} />
          <meshStandardMaterial color="#fff5cc" emissive="#f5b800" emissiveIntensity={1.4} />
        </mesh>
        <mesh position={[0, -0.15, -0.35]}>
          <boxGeometry args={[0.35, 0.45, 0.2]} />
          <meshStandardMaterial color="#1a1510" />
        </mesh>
        <Label y={-0.85} size={0.13}>
          MINER CAP LAMP
        </Label>
      </group>
    </Float>
  )
}

function GlovesBootsModel() {
  return (
    <group>
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[-0.9, 0.1, 0]}>
          <mesh rotation={[0.3, 0, 0.2]}>
            <boxGeometry args={[0.45, 0.7, 0.2]} />
            <meshStandardMaterial color="#c4452d" roughness={0.6} />
          </mesh>
          <mesh position={[0, -0.4, 0.1]} rotation={[0.5, 0, 0]}>
            <boxGeometry args={[0.35, 0.25, 0.35]} />
            <meshStandardMaterial color="#8f2f1c" />
          </mesh>
          <Label y={-0.85} size={0.11}>
            GLOVES
          </Label>
        </group>
      </Float>
      <SpinSlow speed={0.4}>
        <group position={[0.9, -0.1, 0]}>
          <mesh>
            <boxGeometry args={[0.4, 0.55, 0.7]} />
            <meshStandardMaterial color="#1a1510" />
          </mesh>
          <mesh position={[0, 0.35, -0.05]}>
            <boxGeometry args={[0.42, 0.25, 0.5]} />
            <meshStandardMaterial color="#2c261e" />
          </mesh>
          <mesh position={[0, -0.2, 0.4]}>
            <boxGeometry args={[0.42, 0.2, 0.15]} />
            <meshStandardMaterial color="#f5b800" />
          </mesh>
          <Label y={-0.75} size={0.11}>
            SAFETY BOOTS
          </Label>
        </group>
      </SpinSlow>
    </group>
  )
}

function WarningSignModel() {
  return (
    <Bob amp={0.06}>
      <group>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1.2, 1.2, 0.08]} />
          <meshStandardMaterial color="#f5b800" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0.05]}>
          <boxGeometry args={[1.0, 1.0, 0.02]} />
          <meshStandardMaterial color="#1a1510" />
        </mesh>
        <Label y={0.05} size={0.35} color="#f5b800">
          !
        </Label>
        <Label y={-1.15} size={0.13}>
          DANGER ZONE
        </Label>
      </group>
    </Bob>
  )
}

function FirstAidModel() {
  return (
    <SpinSlow speed={0.4}>
      <group>
        <mesh>
          <boxGeometry args={[1.1, 0.85, 0.35]} />
          <meshStandardMaterial color="#e8e8e8" metalness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.19]}>
          <boxGeometry args={[0.55, 0.18, 0.04]} />
          <meshStandardMaterial color="#c4452d" />
        </mesh>
        <mesh position={[0, 0, 0.19]}>
          <boxGeometry args={[0.18, 0.55, 0.04]} />
          <meshStandardMaterial color="#c4452d" />
        </mesh>
        <Label y={-0.75} size={0.13} color="#ff6b4a">
          FIRST AID
        </Label>
      </group>
    </SpinSlow>
  )
}

function EyewashModel() {
  return (
    <Float speed={1.5} floatIntensity={0.2}>
      <group>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.35, 0.4, 0.7, 16]} />
          <meshStandardMaterial color="#3d7ea6" metalness={0.4} />
        </mesh>
        <mesh position={[-0.15, 0.2, 0.1]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.35, 10]} />
          <meshStandardMaterial color="#c4c9ce" metalness={0.7} />
        </mesh>
        <mesh position={[0.15, 0.2, 0.1]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.08, 0.35, 10]} />
          <meshStandardMaterial color="#c4c9ce" metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.45, 0.25]}>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshStandardMaterial color="#7dd3fc" emissive="#3d7ea6" emissiveIntensity={0.5} />
        </mesh>
        <Label y={-0.95} size={0.13}>
          EYEWASH STATION
        </Label>
      </group>
    </Float>
  )
}

function SceneForType({ type }: { type: OverlayType }) {
  switch (type) {
    case 'exit':
      return (
        <group>
          <group position={[-1.3, 0.2, 0]} scale={0.85}>
            <ExitSignModel label="EXIT A" />
          </group>
          <group position={[1.25, -0.15, 0]} scale={0.75}>
            <ExitSignModel label="EXIT B" />
          </group>
        </group>
      )
    case 'extinguisher':
      return (
        <group scale={0.95}>
          <ExtinguisherModel />
        </group>
      )
    case 'evacuate':
      return <EvacuateModel />
    case 'hazard':
      return <HazardZoneModel />
    case 'ppe':
      return <PpeKitModel />
    case 'buddy':
      return <BuddySystemModel />
    case 'alarm':
      return <AlarmModel />
    case 'assembly':
      return <AssemblyModel />
    case 'smoke_crawl':
      return <SmokeCrawlModel />
    case 'fire_blanket':
      return <FireBlanketModel />
    case 'gas_meter':
      return <GasMeterModel />
    case 'respirator':
      return <RespiratorModel />
    case 'tripod':
      return <TripodModel />
    case 'ventilation':
      return <VentilationModel />
    case 'loto':
      return <LotoModel />
    case 'conveyor_guard':
      return <ConveyorGuardModel />
    case 'barrier':
      return <BarrierModel />
    case 'cap_lamp':
      return <CapLampModel />
    case 'gloves_boots':
      return <GlovesBootsModel />
    case 'warning_sign':
      return <WarningSignModel />
    case 'first_aid':
      return <FirstAidModel />
    case 'eyewash':
      return <EyewashModel />
    default:
      return null
  }
}

export function ArScene({
  type,
  onHotspotSelect,
}: {
  type: OverlayType
  onHotspotSelect?: (info: HotspotInfo | null) => void
}) {
  const { language } = useStore()
  return (
    <group>
      <SceneForType type={type} />
      <ModelHotspots key={type} type={type} language={language} onSelect={onHotspotSelect} />
    </group>
  )
}

export function ArModelStage({ overlayType }: { overlayType: OverlayType }) {
  const [hotspot, setHotspot] = useState<HotspotInfo | null>(null)

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="pointer-events-auto absolute inset-0">
        <Canvas
          camera={{ position: [0, 0.25, 5.2], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.95} />
          <directionalLight position={[4, 6, 3]} intensity={1.3} />
          <pointLight position={[-3, 2, 2]} intensity={0.55} color="#f5b800" />
          <pointLight position={[2, -1, 3]} intensity={0.35} color="#19f08b" />
          <group scale={0.9}>
            <ArScene type={overlayType} onHotspotSelect={setHotspot} />
          </group>
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.28}
            scale={8}
            blur={2}
            far={2.5}
          />
        </Canvas>
      </div>
      {!hotspot && (
        <div className="pointer-events-none absolute bottom-16 left-3 right-3 z-20">
          <div className="inline-block max-w-full rounded border border-line bg-ink/80 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-soft backdrop-blur">
            Tap ● numbers · {overlayType}
          </div>
        </div>
      )}
      <HotspotSheet info={hotspot} onClose={() => setHotspot(null)} />
    </div>
  )
}

type CatalogItem = {
  type: OverlayType
  name: Record<Lang, string>
  module: Record<Lang, string>
}

const M = {
  fire: { en: 'Fire & Explosion', hi: 'अग्नि एवं विस्फोट', sat: 'ᱥᱮᱝᱜᱮᱞ ᱟᱨ ᱯᱷᱚᱴᱟᱣ' },
  gas: { en: 'Gas & Confined', hi: 'गैस व सीमित स्थान', sat: 'ᱜᱮᱥ ᱟᱨ ᱠᱚᱱᱯᱷᱟᱭᱤᱱᱰ' },
  mach: { en: 'Machinery / LOTO', hi: 'मशीनरी / LOTO', sat: 'ᱢᱮᱥᱤᱱ / LOTO' },
  ppe: { en: 'Site PPE', hi: 'साइट PPE', sat: 'ᱥᱟᱭᱤᱴ PPE' },
  aid: { en: 'First Response', hi: 'प्रथम प्रतिक्रिया', sat: 'ᱯᱟᱹᱦᱤᱞ ᱨᱮᱥᱯᱚᱱᱥ' },
}

export const AR_MODEL_CATALOG: CatalogItem[] = [
  { type: 'exit', name: { en: 'Emergency EXIT signs', hi: 'आपातकालीन EXIT साइन', sat: 'EXIT ᱪᱤᱱᱦᱟᱹ' }, module: M.fire },
  { type: 'extinguisher', name: { en: 'CO₂ extinguisher', hi: 'CO₂ अग्निशामक', sat: 'CO₂ ᱥᱮᱝᱜᱮᱞ ᱵᱚᱸᱫᱚ' }, module: M.fire },
  { type: 'alarm', name: { en: 'Fire alarm beacon', hi: 'अग्नि अलार्म बीकन', sat: 'ᱥᱮᱝᱜᱮᱞ ᱟᱞᱟᱨᱢ' }, module: M.fire },
  { type: 'evacuate', name: { en: 'Evacuation path', hi: 'निकासी पथ', sat: 'ᱵᱟᱦᱨᱮᱭᱮᱱ ᱰᱟᱦᱟᱨ' }, module: M.fire },
  { type: 'smoke_crawl', name: { en: 'Smoke crawl guide', hi: 'धुएँ में रेंगने का मार्ग', sat: 'ᱫᱷᱩᱵᱟᱹᱣ ᱞᱟᱛᱟᱨ' }, module: M.fire },
  { type: 'fire_blanket', name: { en: 'Fire blanket', hi: 'अग्नि कंबल', sat: 'ᱥᱮᱝᱜᱮᱞ ᱠᱚᱢᱵᱚᱞ' }, module: M.fire },
  { type: 'assembly', name: { en: 'Assembly / muster point', hi: 'असेंबली / मस्टर पॉइंट', sat: 'ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ' }, module: M.fire },
  { type: 'hazard', name: { en: 'Gas HOT/WARM/COLD zones', hi: 'गैस हॉट/वार्म/कोल्ड ज़ोन', sat: 'ᱜᱮᱥ ᱡᱚᱱ' }, module: M.gas },
  { type: 'gas_meter', name: { en: '4-gas detector', hi: '४-गैस डिटेक्टर', sat: '4-ᱜᱮᱥ ᱰᱤᱴᱮᱠᱴᱚᱨ' }, module: M.gas },
  { type: 'ppe', name: { en: 'Helmet · Detector · Harness', hi: 'हेलमेट · डिटेक्टर · हार्नेस', sat: 'ᱦᱮᱞᱢᱮᱴ · ᱰᱤᱴᱮᱠᱴᱚᱨ · ᱦᱟᱨᱱᱮᱥ' }, module: M.gas },
  { type: 'respirator', name: { en: 'Full-face respirator', hi: 'फुल-फेस रेस्पिरेटर', sat: 'ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ' }, module: M.gas },
  { type: 'buddy', name: { en: 'Buddy-system crew', hi: 'बडी-सिस्टम दल', sat: 'ᱵᱚᱰᱤ-ᱥᱤᱥᱴᱚᱢ' }, module: M.gas },
  { type: 'tripod', name: { en: 'Confined-space rescue tripod', hi: 'सीमित स्थान रेस्क्यू ट्राइपॉड', sat: 'ᱨᱮᱥᱠᱭᱩ ᱴᱨᱟᱭᱯᱚᱰ' }, module: M.gas },
  { type: 'ventilation', name: { en: 'Forced ventilation fan', hi: 'जबरन वेंटिलेशन पंखा', sat: 'ᱵᱷᱮᱱᱴᱤᱞᱮᱥᱚᱱ' }, module: M.gas },
  { type: 'loto', name: { en: 'LOTO lock & tag', hi: 'LOTO लॉक और टैग', sat: 'LOTO ᱞᱚᱠ' }, module: M.mach },
  { type: 'conveyor_guard', name: { en: 'Conveyor machine guard', hi: 'कन्वेयर मशीन गार्ड', sat: 'ᱠᱚᱱᱵᱷᱮᱭᱚᱨ ᱜᱟᱰᱟ' }, module: M.mach },
  { type: 'barrier', name: { en: 'Caution barrier', hi: 'सावधानी बैरियर', sat: 'ᱥᱟᱵᱽᱫᱷᱟᱱ ᱵᱮᱨᱤᱭᱚᱨ' }, module: M.mach },
  { type: 'warning_sign', name: { en: 'Danger warning sign', hi: 'खतरा चेतावनी साइन', sat: 'ᱠᱷᱚᱛᱨᱟ ᱪᱤᱱᱦᱟᱹ' }, module: M.mach },
  { type: 'cap_lamp', name: { en: 'Miner cap lamp', hi: 'खनिक कैप लैंप', sat: 'ᱠᱷᱚᱫᱟᱱ ᱞᱮᱢᱯ' }, module: M.ppe },
  { type: 'gloves_boots', name: { en: 'Gloves & safety boots', hi: 'दस्ताने और सुरक्षा जूते', sat: 'ᱜᱞᱚᱵᱷᱥ ᱟᱨ ᱡᱩᱛᱟ' }, module: M.ppe },
  { type: 'first_aid', name: { en: 'First aid kit', hi: 'प्राथमिक चिकित्सा किट', sat: 'ᱯᱟᱹᱦᱤᱞ ᱜᱚᱲᱚ ᱠᱤᱴ' }, module: M.aid },
  { type: 'eyewash', name: { en: 'Eyewash station', hi: 'आईवॉश स्टेशन', sat: 'ᱢᱮᱫ ᱫᱟᱜ ᱥᱴᱮᱥᱚᱱ' }, module: M.aid },
]

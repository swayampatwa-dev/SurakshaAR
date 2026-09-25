import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Camera, Check, ChevronLeft, X } from 'lucide-react'
import { Shell, PageHeader } from '../components/Shell'
import { AR_MODEL_CATALOG, ArModelStage } from '../components/ArModels'
import { MODULES } from '../data/modules'
import { t } from '../i18n'
import { useStore } from '../store'

export function ModuleDetail() {
  const { id } = useParams()
  const { worker, language, getModuleProgress } = useStore()
  const mod = MODULES.find((m) => m.id === id)

  if (!worker) return <Navigate to="/onboard" replace />
  if (!mod || mod.status === 'locked') return <Navigate to="/train" replace />

  const prog = getModuleProgress(mod.id)
  const arDone = prog.completedSteps.length >= mod.steps.length

  return (
    <Shell solid>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <Link
          to="/train"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-bone"
        >
          <ChevronLeft className="h-4 w-4" /> {t('allModules', language)}
        </Link>

        <PageHeader
          eyebrow={`${mod.code} · ${mod.domain}`}
          title={mod.title[language]}
          description={mod.summary[language]}
        />

        <ol className="mt-8 space-y-2">
          {mod.steps.map((s, i) => {
            const done = prog.completedSteps.includes(s.id)
            return (
              <li key={s.id} className="card flex items-start gap-3 px-4 py-3.5">
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded text-xs font-bold ${
                    done ? 'bg-forge text-bone' : 'bg-panel-2 text-muted'
                  }`}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <div>
                  <div className="font-semibold text-bone">{s.title[language]}</div>
                  <div className="mt-1 text-sm text-muted">{s.instruction[language]}</div>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={`/module/${mod.id}/ar`} className="btn btn-primary">
            <Camera className="h-4 w-4" />
            {arDone ? t('replayAr', language) : t('startAr', language)}
          </Link>
          {arDone && (
            <Link to={`/module/${mod.id}/quiz`} className="btn btn-secondary">
              {t('openAssess', language)}
            </Link>
          )}
        </div>

        <div className="card mt-10 p-5">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            {t('assetsInModule', language)}
          </h3>
          <ul className="mt-3 divide-y divide-line">
            {mod.steps.map((s) => {
              const meta = AR_MODEL_CATALOG.find((m) => m.type === s.overlayType)
              return (
                <li
                  key={s.id}
                  className="flex items-center justify-between gap-3 py-2.5 text-sm"
                >
                  <span className="text-soft">
                    {meta?.name[language] ?? s.overlayType}
                  </span>
                  <span className="badge badge-amber">{s.overlayType}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </Shell>
  )
}

export function ArSession() {
  const { id } = useParams()
  const nav = useNavigate()
  const { worker, language, completeStep, getModuleProgress } = useStore()
  const mod = MODULES.find((m) => m.id === id)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [camError, setCamError] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'ok' | 'bad' | null>(null)

  useEffect(() => {
    let stream: MediaStream | null = null
    const start = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      } catch {
        setCamError(true)
      }
    }
    void start()
    return () => {
      stream?.getTracks().forEach((tr) => tr.stop())
    }
  }, [])

  if (!worker) return <Navigate to="/onboard" replace />
  if (!mod || !mod.steps.length) return <Navigate to="/train" replace />

  const step = mod.steps[stepIndex]
  const prog = getModuleProgress(mod.id)

  const confirm = () => {
    if (!selected) return
    const choice = step.choices?.find((c) => c.id === selected)
    if (!choice?.correct) {
      setFeedback('bad')
      return
    }
    setFeedback('ok')
    completeStep(mod.id, step.id)
    window.setTimeout(() => {
      setSelected(null)
      setFeedback(null)
      if (stepIndex < mod.steps.length - 1) {
        setStepIndex((i) => i + 1)
      } else {
        nav(`/module/${mod.id}/quiz`)
      }
    }, 650)
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              {t('arSession', language)} · {t('stepOf', language)} {stepIndex + 1}{' '}
              {t('of', language)} {mod.steps.length}
            </div>
            <h1 className="mt-1 text-xl font-semibold text-bone">{step.title[language]}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="progress-track w-28">
              <div
                className="progress-fill"
                style={{
                  width: `${((stepIndex + (feedback === 'ok' ? 1 : 0)) / mod.steps.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-xs text-muted">
              {prog.completedSteps.length}/{mod.steps.length} {t('done', language)}
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-line bg-ink lg:min-h-[540px]">
            {!camError ? (
              <video
                ref={videoRef}
                playsInline
                muted
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-panel-2 via-coal to-ink" />
            )}
            <div className="ar-scan" />
            <div className="absolute left-3 top-3 z-20 rounded border border-line bg-ink/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-soft backdrop-blur">
              {camError ? t('simEnv', language) : t('liveCam', language)}
            </div>
            <ArModelStage key={step.id} overlayType={step.overlayType} />
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-ink via-ink/85 to-transparent p-4 pt-14">
              <p className="text-sm text-soft">{t('cameraHint', language)}</p>
            </div>
          </div>

          <aside className="card flex flex-col p-5">
            <h2 className="text-base font-semibold text-bone">{step.title[language]}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.instruction[language]}
            </p>
            <p className="mt-3 rounded border border-line bg-panel-2/80 px-3 py-2 text-xs text-safety">
              {t('hint', language)} — {step.hint[language]}
            </p>

            <div className="mt-5 flex-1 space-y-2">
              {step.choices?.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setSelected(c.id)
                    setFeedback(null)
                  }}
                  className={`flex w-full items-center justify-between rounded border px-3 py-3 text-left text-sm transition ${
                    selected === c.id
                      ? 'border-safety bg-safety-soft text-bone'
                      : 'border-line text-muted hover:border-line-strong hover:text-soft'
                  }`}
                >
                  {c.label[language]}
                  {selected === c.id && <Check className="h-4 w-4 shrink-0 text-safety" />}
                </button>
              ))}
            </div>

            {feedback === 'bad' && (
              <div className="mt-3 flex items-center gap-2 text-sm text-oxide">
                <X className="h-4 w-4" /> {t('incorrect', language)}
              </div>
            )}
            {feedback === 'ok' && (
              <div className="mt-3 flex items-center gap-2 text-sm text-forge">
                <Check className="h-4 w-4" /> {t('correctAdv', language)}
              </div>
            )}

            <button
              type="button"
              disabled={!selected}
              onClick={confirm}
              className="btn btn-primary mt-5 w-full"
            >
              {step.actionLabel[language]}
            </button>
          </aside>
        </div>
      </main>
    </Shell>
  )
}

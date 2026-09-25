import { Link, Navigate } from 'react-router-dom'
import { CheckCircle2, ChevronRight, Lock } from 'lucide-react'
import { Shell, PageHeader } from '../components/Shell'
import { SECTOR_LABEL } from '../data/demo'
import { MODULES } from '../data/modules'
import { t } from '../i18n'
import { useStore } from '../store'

export function TrainHub() {
  const { worker, language, getModuleProgress, certificates } = useStore()
  if (!worker) return <Navigate to="/onboard" replace />

  const mine = certificates.filter((c) => c.workerId === worker.id).length
  const liveDone = MODULES.filter(
    (m) => m.status === 'available' && getModuleProgress(m.id).quizPassed,
  ).length

  return (
    <Shell solid>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <PageHeader
          eyebrow={t('modules', language)}
          title={`${t('welcome', language)}, ${worker.name}`}
          description={`${worker.site} · ${SECTOR_LABEL[worker.sector][language]} · ${worker.daysOnSite} ${t('daysOnSiteShort', language)}`}
          actions={
            <Link to="/wallet" className="btn btn-secondary !text-sm">
              {t('certificates', language)} ({mine})
            </Link>
          }
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            {
              label: t('modAvailable', language),
              value: MODULES.filter((m) => m.status === 'available').length,
            },
            { label: t('assessPassed', language), value: liveDone },
            { label: t('certsIssued', language), value: mine },
          ].map((s) => (
            <div key={s.label} className="card px-4 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                {s.label}
              </div>
              <div className="mt-1 font-display text-3xl text-bone">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3">
          {MODULES.map((m) => {
            const prog = getModuleProgress(m.id)
            const locked = m.status === 'locked'
            const done = prog.quizPassed

            return (
              <div
                key={m.id}
                className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-safety">{m.code}</span>
                    {done && (
                      <span className="badge badge-green">
                        <CheckCircle2 className="h-3 w-3" /> {t('certified', language)}
                      </span>
                    )}
                    {locked && (
                      <span className="badge badge-neutral">{t('roadmap', language)}</span>
                    )}
                  </div>
                  <h2 className="mt-1.5 text-lg font-semibold text-bone">
                    {m.title[language]}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{m.summary[language]}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="progress-track max-w-[180px] flex-1">
                      <div className="progress-fill" style={{ width: `${prog.percent}%` }} />
                    </div>
                    <span className="text-xs text-muted">{prog.percent}%</span>
                    <span className="text-xs text-muted">
                      · {m.durationMin} {t('min', language)}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  {locked ? (
                    <button
                      type="button"
                      disabled
                      className="btn btn-secondary !text-sm opacity-50"
                    >
                      <Lock className="h-3.5 w-3.5" /> {t('unavailable', language)}
                    </button>
                  ) : done ? (
                    <Link
                      to={`/module/${m.id}/certificate`}
                      className="btn btn-secondary !text-sm"
                    >
                      {t('viewCert', language)} <ChevronRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Link to={`/module/${m.id}`} className="btn btn-primary !text-sm">
                      {prog.completedSteps.length
                        ? t('resume', language)
                        : t('startModule', language)}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </Shell>
  )
}

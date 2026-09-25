import { Link, Navigate, useParams } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { Printer, ShieldCheck } from 'lucide-react'
import { Shell, PageHeader, SectionLabel } from '../components/Shell'
import { SECTOR_LABEL } from '../data/demo'
import { MODULES } from '../data/modules'
import { t } from '../i18n'
import { useStore } from '../store'

export function CertificatePage() {
  const { id } = useParams()
  const { worker, certificates, language } = useStore()
  if (!worker) return <Navigate to="/onboard" replace />

  const cert = certificates.find((c) => c.moduleId === id && c.workerId === worker.id)
  const mod = MODULES.find((m) => m.id === id)

  if (!cert || !mod) {
    return (
      <Shell solid>
        <main className="mx-auto max-w-lg px-4 py-16 text-center">
          <p className="text-muted">{t('noCert', language)}</p>
          <Link to={`/module/${id}/quiz`} className="mt-4 inline-block text-safety">
            {t('completeAssess', language)}
          </Link>
        </main>
      </Shell>
    )
  }

  const verifyUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/verify?id=${encodeURIComponent(cert.id)}`
      : `/verify?id=${cert.id}`

  return (
    <Shell solid>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <PageHeader
          eyebrow={t('credIssued', language)}
          title={t('indSafetyCert', language)}
          description={t('certDesc', language)}
        />

        <div className="card mt-8 overflow-hidden">
          <div className="flex items-center justify-between border-b border-line bg-panel-2 px-6 py-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
              {t('govJh', language)}
            </span>
            <span className="badge badge-green">{t('verifiedRecord', language)}</span>
          </div>

          <div className="grid gap-8 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
            <div>
              <p className="text-sm text-muted">{t('certifiesThat', language)}</p>
              <p className="mt-1 font-display text-3xl tracking-tight text-bone">
                {cert.workerName}
              </p>
              <p className="mt-5 text-sm text-muted">{t('demonstratedIn', language)}</p>
              <p className="mt-1 text-lg font-semibold text-safety">
                {mod.title[language]}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {t('score', language)}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-bone">{cert.score}%</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {t('sector', language)}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-bone">
                    {SECTOR_LABEL[cert.sector][language]}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {t('issued', language)}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-bone">
                    {new Date(cert.issuedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-muted">
                    {t('certId', language)}
                  </dt>
                  <dd className="mt-0.5 font-mono text-xs text-soft">{cert.id}</dd>
                </div>
              </dl>

              <div className="mt-8 flex items-start gap-2 text-xs text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-forge" />
                {t('certFoot', language)}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-md border border-line bg-bone p-3">
                <QRCodeSVG value={verifyUrl} size={132} level="M" />
              </div>
              <p className="mt-2 text-center text-[10px] text-muted">
                {t('scanVerify', language)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/wallet" className="btn btn-primary !text-sm">
            {t('wallet', language)}
          </Link>
          <Link
            to={`/verify?id=${encodeURIComponent(cert.id)}`}
            className="btn btn-secondary !text-sm"
          >
            {t('publicVerify', language)}
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn btn-ghost !text-sm"
          >
            <Printer className="h-4 w-4" /> {t('print', language)}
          </button>
        </div>
      </main>
    </Shell>
  )
}

export function WalletPage() {
  const { worker, certificates, language } = useStore()
  if (!worker) return <Navigate to="/onboard" replace />

  const mine = certificates.filter((c) => c.workerId === worker.id)

  return (
    <Shell solid>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <PageHeader
          eyebrow={t('credentials', language)}
          title={t('wallet', language)}
          description={t('walletDesc', language)}
        />

        {mine.length === 0 ? (
          <div className="card mt-8 px-5 py-10 text-center">
            <SectionLabel>{t('empty', language)}</SectionLabel>
            <p className="text-muted">{t('noCertsYet', language)}</p>
            <Link to="/train" className="btn btn-primary mt-5 !text-sm">
              {t('browseModules', language)}
            </Link>
          </div>
        ) : (
          <ul className="mt-8 space-y-3">
            {mine.map((c) => {
              const mod = MODULES.find((m) => m.id === c.moduleId)
              return (
                <li
                  key={c.id}
                  className="card flex flex-wrap items-center justify-between gap-4 p-5"
                >
                  <div>
                    <div className="font-semibold text-bone">
                      {mod?.title[language] ?? c.moduleTitle}
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-muted">
                      {c.id} · {c.score}% ·{' '}
                      {new Date(c.issuedAt).toLocaleDateString('en-IN')}
                    </div>
                  </div>
                  <Link
                    to={`/module/${c.moduleId}/certificate`}
                    className="btn btn-secondary !text-sm"
                  >
                    {t('view', language)}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </main>
    </Shell>
  )
}

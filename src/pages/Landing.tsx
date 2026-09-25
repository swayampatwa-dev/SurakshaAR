import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Shell, SectionLabel } from '../components/Shell'
import { t } from '../i18n'
import { useStore } from '../store'
import { MODULES } from '../data/modules'

export function Landing() {
  const { language } = useStore()
  const live = MODULES.filter((m) => m.status === 'available')

  return (
    <Shell>
      <main>
        <section className="relative min-h-[86vh] overflow-hidden hero-photo">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(196,201,206,0.18) 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 lg:justify-center lg:pb-24">
            <div className="max-w-2xl animate-in">
              <div className="mb-5 inline-flex items-center gap-2 rounded border border-line bg-panel/60 px-2.5 py-1 text-[11px] font-medium text-soft backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-forge" />
                {t('protoBadge', language)}
              </div>

              <h1 className="font-display text-[3.25rem] leading-[0.95] tracking-tight text-bone sm:text-6xl lg:text-[4.25rem]">
                <span className="text-safety">{t('brand', language)}</span>
                <span className="mt-2 block text-[0.72em] font-semibold text-soft">
                  {t('heroSub', language)}
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                {t('tagline', language)} {t('heroSupport', language)}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/register" className="btn btn-primary">
                  {t('startTraining', language)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/login" className="btn btn-secondary">
                  {t('loginTitle', language)}
                </Link>
                <Link to="/verify" className="btn btn-ghost">
                  {t('verifyCert', language)}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-coal">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2 lg:gap-20">
            <div className="animate-in">
              <SectionLabel>{t('gapTitle', language)}</SectionLabel>
              <h2 className="font-display text-3xl tracking-tight text-bone sm:text-[2rem]">
                {t('gapHeadline', language)}
              </h2>
            </div>
            <div className="space-y-5 text-[0.975rem] leading-relaxed text-muted animate-in-delay">
              <p>{t('gapP1', language)}</p>
              <p>{t('gapP2', language)}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line surface-noise">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <SectionLabel>{t('capsTitle', language)}</SectionLabel>
            <h2 className="font-display max-w-xl text-3xl tracking-tight text-bone">
              {t('capsHeadline', language)}
            </h2>

            <div className="mt-12 divide-y divide-line border-y border-line">
              {(
                [
                  ['01', 'cap1t', 'cap1d'],
                  ['02', 'cap2t', 'cap2d'],
                  ['03', 'cap3t', 'cap3d'],
                  ['04', 'cap4t', 'cap4d'],
                ] as const
              ).map(([n, tk, dk]) => (
                <div
                  key={n}
                  className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline"
                >
                  <span className="font-display text-sm text-safety">{n}</span>
                  <h3 className="text-lg font-semibold text-bone">{t(tk, language)}</h3>
                  <p className="text-sm leading-relaxed text-muted">{t(dk, language)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-coal">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionLabel>{t('curriculum', language)}</SectionLabel>
                <h2 className="font-display text-3xl tracking-tight text-bone">
                  {t('fiveDomains', language)}
                </h2>
              </div>
              <Link to="/register" className="btn btn-secondary !text-sm">
                {t('openConsole', language)}
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-lg border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-panel-2 text-[11px] uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t('code', language)}</th>
                    <th className="px-4 py-3 font-semibold">{t('module', language)}</th>
                    <th className="hidden px-4 py-3 font-semibold md:table-cell">
                      {t('domain', language)}
                    </th>
                    <th className="px-4 py-3 font-semibold">{t('status', language)}</th>
                  </tr>
                </thead>
                <tbody>
                  {MODULES.map((m) => (
                    <tr key={m.id} className="border-t border-line bg-panel/40">
                      <td className="px-4 py-3.5 font-mono text-xs text-safety">{m.code}</td>
                      <td className="px-4 py-3.5 font-medium text-bone">
                        {m.title[language]}
                      </td>
                      <td className="hidden px-4 py-3.5 text-muted md:table-cell">
                        {m.domain}
                      </td>
                      <td className="px-4 py-3.5">
                        {m.status === 'available' ? (
                          <span className="badge badge-green">
                            <CheckCircle2 className="h-3 w-3" /> {t('live', language)}
                          </span>
                        ) : (
                          <span className="badge badge-neutral">
                            {t('scheduled', language)}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted">
              {live.length} · {t('live', language)}
            </p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl text-bone">{t('ctaTitle', language)}</h2>
              <p className="mt-2 text-sm text-muted">{t('ctaSub', language)}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="btn btn-primary">
                {t('beginDemo', language)}
              </Link>
              <Link to="/login" className="btn btn-secondary">
                {t('loginTitle', language)}
              </Link>
              <Link to="/admin" className="btn btn-ghost">
                {t('openAdmin', language)}
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-line bg-[#0a0b0c] py-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>{t('demoNote', language)}</span>
            <span>{t('govBar', language)}</span>
          </div>
        </footer>
      </main>
    </Shell>
  )
}

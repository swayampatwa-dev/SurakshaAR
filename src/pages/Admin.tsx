import { useMemo, useState } from 'react'
import { Download, LogIn } from 'lucide-react'
import { Shell, PageHeader } from '../components/Shell'
import { DEMO_CERTIFICATES, SECTOR_LABEL } from '../data/demo'
import { MODULES } from '../data/modules'
import { t } from '../i18n'
import { useStore } from '../store'
import type { Sector } from '../types'

const ADMIN_PASS = 'jharkhand2026'

export function AdminPage() {
  const { demoWorkers, certificates, attempts, language } = useStore()
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('suraksha-admin') === '1',
  )
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sectorFilter, setSectorFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return demoWorkers.filter((w) => {
      if (sectorFilter !== 'all' && w.sector !== sectorFilter) return false
      if (
        search &&
        !w.name.toLowerCase().includes(search.toLowerCase()) &&
        !w.site.toLowerCase().includes(search.toLowerCase())
      ) {
        return false
      }
      return true
    })
  }, [demoWorkers, sectorFilter, search])

  const stats = {
    workers: demoWorkers.length,
    certified: demoWorkers.filter((w) => w.modulesDone.length > 0).length,
    certs: certificates.length,
    attempts: attempts.length,
  }

  const exportCsv = () => {
    const rows = [
      ['Name', 'Sector', 'Site', 'Modules Completed', 'Last Active'],
      ...filtered.map((w) => [
        w.name,
        w.sector,
        w.site,
        w.modulesDone.join('|'),
        w.lastActive,
      ]),
    ]
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'suraksha-ar-compliance.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!authed) {
    return (
      <Shell solid>
        <main className="mx-auto max-w-md px-4 py-12">
          <PageHeader
            eyebrow={t('restricted', language)}
            title={t('adminTitle', language)}
            description={t('adminLoginDesc', language)}
          />
          <form
            className="card mt-8 space-y-4 p-6"
            onSubmit={(e) => {
              e.preventDefault()
              if (password === ADMIN_PASS) {
                sessionStorage.setItem('suraksha-admin', '1')
                setAuthed(true)
                setError('')
              } else {
                setError(t('invalidCreds', language))
              }
            }}
          >
            <label className="block">
              <span className="field-label">{t('password', language)}</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field"
                autoComplete="current-password"
              />
            </label>
            <p className="text-xs text-muted">
              {t('demoAccess', language)}:{' '}
              <code className="text-safety">jharkhand2026</code>
            </p>
            {error && <p className="text-sm text-oxide">{error}</p>}
            <button type="submit" className="btn btn-primary w-full">
              <LogIn className="h-4 w-4" /> {t('enterDash', language)}
            </button>
          </form>
        </main>
      </Shell>
    )
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <PageHeader
          eyebrow={t('operations', language)}
          title={t('dashTitle', language)}
          description={t('dashDesc', language)}
          actions={
            <button type="button" onClick={exportCsv} className="btn btn-secondary !text-sm">
              <Download className="h-4 w-4" /> {t('exportCsv', language)}
            </button>
          }
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: t('regWorkers', language), value: stats.workers },
            { label: t('withCert', language), value: stats.certified },
            { label: t('certsIssued', language), value: stats.certs },
            { label: t('quizAttempts', language), value: stats.attempts },
          ].map((s) => (
            <div key={s.label} className="card px-4 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                {s.label}
              </div>
              <div className="mt-1 font-display text-3xl text-bone">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('searchPh', language)}
            className="field max-w-xs"
          />
          <select
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
            className="field max-w-[200px]"
          >
            <option value="all">{t('allSectors', language)}</option>
            {(Object.keys(SECTOR_LABEL) as Sector[]).map((s) => (
              <option key={s} value={s}>
                {SECTOR_LABEL[s][language]}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-panel-2 text-[11px] uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">{t('worker', language)}</th>
                <th className="px-4 py-3 font-semibold">{t('sector', language)}</th>
                <th className="px-4 py-3 font-semibold">{t('siteUnit', language)}</th>
                <th className="px-4 py-3 font-semibold">{t('modules', language)}</th>
                <th className="px-4 py-3 font-semibold">{t('lastActive', language)}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((w) => (
                <tr key={w.id} className="border-t border-line bg-panel/50">
                  <td className="px-4 py-3 font-medium text-bone">{w.name}</td>
                  <td className="px-4 py-3 text-muted">
                    {SECTOR_LABEL[w.sector][language]}
                  </td>
                  <td className="px-4 py-3 text-muted">{w.site}</td>
                  <td className="px-4 py-3 text-soft">
                    {w.modulesDone.length === 0
                      ? '—'
                      : w.modulesDone
                          .map((id) => MODULES.find((m) => m.id === id)?.code ?? id)
                          .join(', ')}
                  </td>
                  <td className="px-4 py-3 text-muted">{w.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {t('recentCerts', language)}
          </h2>
          <ul className="mt-3 space-y-2">
            {certificates.slice(0, 10).map((c) => (
              <li
                key={c.id}
                className="card flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm"
              >
                <span className="text-bone">
                  {c.workerName}
                  <span className="text-muted">
                    {' '}
                    · {MODULES.find((m) => m.id === c.moduleId)?.title[language]}
                  </span>
                </span>
                <span className="font-mono text-[11px] text-muted">{c.id}</span>
              </li>
            ))}
            {certificates.length === 0 && (
              <li className="text-sm text-muted">{t('noCertsSession', language)}</li>
            )}
          </ul>
          <p className="mt-4 text-xs text-muted">
            {t('tryDemoCert', language)}: {DEMO_CERTIFICATES[0]?.id}
          </p>
        </div>
      </main>
    </Shell>
  )
}

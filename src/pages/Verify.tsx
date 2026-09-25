import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BadgeCheck, BadgeX, Search } from 'lucide-react'
import { Shell, PageHeader } from '../components/Shell'
import { DEMO_CERTIFICATES } from '../data/demo'
import { MODULES } from '../data/modules'
import { t } from '../i18n'
import { useStore } from '../store'

export function VerifyPage() {
  const [params] = useSearchParams()
  const { findCertificate, language } = useStore()
  const initial = params.get('id') ?? ''
  const [query, setQuery] = useState(initial)

  const cert = useMemo(() => {
    const id = query.trim()
    if (!id) return undefined
    return findCertificate(id)
  }, [query, findCertificate])

  const mod = cert ? MODULES.find((m) => m.id === cert.moduleId) : undefined

  return (
    <Shell solid>
      <main className="mx-auto max-w-lg px-4 py-10">
        <PageHeader
          eyebrow={t('publicRegistry', language)}
          title={t('verifyTitle', language)}
          description={t('verifyDesc', language)}
        />

        <form
          className="mt-8 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            const fd = new FormData(e.currentTarget)
            setQuery(String(fd.get('id') || ''))
          }}
        >
          <input
            name="id"
            defaultValue={initial}
            placeholder={t('pasteId', language)}
            className="field flex-1"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary !px-4">
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-muted">{t('tryDemoCert', language)}:</span>
          {DEMO_CERTIFICATES.slice(0, 3).map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setQuery(c.id)}
              className="rounded border border-line px-2 py-1 font-mono text-[10px] text-safety hover:border-safety"
            >
              {c.id}
            </button>
          ))}
        </div>

        {query.trim() && (
          <div className="card mt-6 p-6">
            {cert ? (
              <>
                <div className="flex items-center gap-2 text-forge">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="font-semibold">{t('validCert', language)}</span>
                </div>
                <dl className="mt-5 space-y-3 text-sm">
                  {(
                    [
                      [t('worker', language), cert.workerName],
                      [t('module', language), mod?.title[language] ?? cert.moduleTitle],
                      [t('score', language), `${cert.score}%`],
                      [t('issued', language), new Date(cert.issuedAt).toLocaleString('en-IN')],
                      [t('certId', language), cert.id],
                    ] as const
                  ).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-line pb-2">
                      <dt className="text-muted">{k}</dt>
                      <dd className="text-right font-medium text-bone">{v}</dd>
                    </div>
                  ))}
                </dl>
              </>
            ) : (
              <div className="flex items-center gap-2 text-oxide">
                <BadgeX className="h-5 w-5" />
                <span className="font-semibold">{t('noMatch', language)}</span>
              </div>
            )}
          </div>
        )}
      </main>
    </Shell>
  )
}

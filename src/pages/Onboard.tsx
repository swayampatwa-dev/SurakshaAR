import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shell, PageHeader } from '../components/Shell'
import { SECTOR_LABEL } from '../data/demo'
import { t } from '../i18n'
import { useStore } from '../store'
import type { Lang, Sector } from '../types'

export function Onboard() {
  const { language, registerWorker } = useStore()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [sector, setSector] = useState<Sector>('mining')
  const [site, setSite] = useState('')
  const [days, setDays] = useState(7)
  const [lang, setLang] = useState<Lang>(language)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !site.trim()) return
    registerWorker({
      name: name.trim(),
      sector,
      site: site.trim(),
      daysOnSite: days,
      language: lang,
    })
    nav('/train')
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-lg px-4 py-10">
        <PageHeader
          eyebrow={t('enrolEyebrow', language)}
          title={t('enrolTitle', language)}
          description={t('enrolDesc', language)}
        />

        <form onSubmit={submit} className="card mt-8 space-y-5 p-6">
          <label className="block">
            <span className="field-label">{t('fullName', language)}</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field"
              placeholder="बिरसा किस्कू / Birsa Kisku"
              autoComplete="name"
            />
          </label>

          <label className="block">
            <span className="field-label">{t('sector', language)}</span>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value as Sector)}
              className="field"
            >
              {(Object.keys(SECTOR_LABEL) as Sector[]).map((s) => (
                <option key={s} value={s}>
                  {SECTOR_LABEL[s][language]}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="field-label">{t('siteUnit', language)}</span>
            <input
              required
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className="field"
              placeholder="झरिया शाफ्ट-२"
            />
          </label>

          <label className="block">
            <span className="field-label">{t('daysOnSite', language)}</span>
            <input
              type="number"
              min={0}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="field"
            />
          </label>

          <fieldset>
            <legend className="field-label">{t('uiLang', language)}</legend>
            <div className="mt-1 grid grid-cols-3 gap-2">
              {(
                [
                  ['en', 'English'],
                  ['hi', 'हिन्दी'],
                  ['sat', 'ᱥᱟᱱᱛᱟᱲᱤ'],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setLang(id)}
                  className={`rounded border px-3 py-2.5 text-sm transition ${
                    lang === id
                      ? 'border-safety bg-safety-soft text-safety'
                      : 'border-line text-muted hover:border-line-strong'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          {days < 30 && (
            <div className="rounded border border-oxide/30 bg-oxide/10 px-3 py-2.5 text-sm text-soft">
              {t('priorityFlag', language)}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full">
            {t('continue', language)}
          </button>
        </form>
      </main>
    </Shell>
  )
}

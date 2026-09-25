import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Shell, PageHeader } from '../components/Shell'
import { SECTOR_LABEL } from '../data/demo'
import { t } from '../i18n'
import { useStore } from '../store'
import type { Lang, Sector } from '../types'

export function RegisterPage() {
  const { language, registerAccount, user } = useStore()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [sector, setSector] = useState<Sector>('mining')
  const [site, setSite] = useState('')
  const [days, setDays] = useState(7)
  const [lang, setLang] = useState<Lang>(language)
  const [error, setError] = useState('')

  if (user) return <Navigate to="/train" replace />

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) {
      setError(t('authWeakPass', language))
      return
    }
    if (password !== confirm) {
      setError(t('authPassMismatch', language))
      return
    }
    const res = registerAccount({
      name,
      email,
      phone,
      password,
      sector,
      site,
      daysOnSite: days,
      language: lang,
    })
    if (!res.ok) {
      setError(
        res.error === 'exists' ? t('authExists', language) : t('authMissing', language),
      )
      return
    }
    nav('/train')
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-lg px-4 py-10">
        <PageHeader
          eyebrow={t('authAccess', language)}
          title={t('registerTitle', language)}
          description={t('registerDesc', language)}
        />

        <form onSubmit={submit} className="card mt-8 space-y-4 p-6">
          <label className="block">
            <span className="field-label">{t('fullName', language)}</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field"
              placeholder="बिरसा किस्कू"
              autoComplete="name"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="field-label">{t('email', language)}</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="field-label">{t('phone', language)}</span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="field"
                placeholder="98765xxxxx"
                autoComplete="tel"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="field-label">{t('password', language)}</span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field"
                autoComplete="new-password"
              />
            </label>
            <label className="block">
              <span className="field-label">{t('confirmPassword', language)}</span>
              <input
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="field"
                autoComplete="new-password"
              />
            </label>
          </div>

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

          {error && <p className="text-sm text-oxide">{error}</p>}

          <button type="submit" className="btn btn-primary w-full">
            {t('registerBtn', language)}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          {t('haveAccount', language)}{' '}
          <Link to="/login" className="text-safety hover:underline">
            {t('loginTitle', language)}
          </Link>
        </p>
      </main>
    </Shell>
  )
}

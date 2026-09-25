import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Shell, PageHeader } from '../components/Shell'
import { t } from '../i18n'
import { useStore } from '../store'

export function LoginPage() {
  const { language, login, user } = useStore()
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) return <Navigate to="/train" replace />

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const res = login(email, password)
    if (!res.ok) {
      setError(t('authInvalid', language))
      return
    }
    nav('/train')
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-md px-4 py-10">
        <PageHeader
          eyebrow={t('authAccess', language)}
          title={t('loginTitle', language)}
          description={t('loginDesc', language)}
        />

        <form onSubmit={submit} className="card mt-8 space-y-4 p-6">
          <label className="block">
            <span className="field-label">{t('email', language)}</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field"
              placeholder="ramesh@dhanbad.in"
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="field-label">{t('password', language)}</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field"
              autoComplete="current-password"
            />
          </label>

          {error && <p className="text-sm text-oxide">{error}</p>}

          <button type="submit" className="btn btn-primary w-full">
            {t('loginBtn', language)}
          </button>
        </form>

        <div className="card mt-4 space-y-2 p-4 text-xs text-muted">
          <p className="font-semibold text-soft">{t('demoAccounts', language)}</p>
          <p>
            <code className="text-safety">ramesh@dhanbad.in</code> / suraksha123
          </p>
          <p>
            <code className="text-safety">suman@koderma.in</code> / train123
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          {t('noAccount', language)}{' '}
          <Link to="/register" className="text-safety hover:underline">
            {t('registerTitle', language)}
          </Link>
        </p>
      </main>
    </Shell>
  )
}

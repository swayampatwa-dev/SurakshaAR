import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HardHat, LogOut, Wifi, WifiOff } from 'lucide-react'
import { t } from '../i18n'
import { useStore } from '../store'
import type { Lang } from '../types'

const langs: { id: Lang; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'hi', label: 'हिं' },
  { id: 'sat', label: 'ᱥᱟᱱ' },
]

export function Shell({
  children,
  solid = false,
}: {
  children: React.ReactNode
  solid?: boolean
}) {
  const { language, setLanguage, offlineMode, toggleOffline, user, logout } =
    useStore()
  const nav = useNavigate()

  const onLogout = () => {
    logout()
    nav('/')
  }

  return (
    <div className="min-h-screen bg-ink text-bone">
      <div className="border-b border-line bg-[#0a0b0c] text-[11px] text-muted">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5">
          <span>{t('govBar', language)}</span>
          <span className="hidden sm:inline">SIH 2026 · PS 26041</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b border-line ${
          solid ? 'bg-coal/95 backdrop-blur-md' : 'bg-ink/80 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-safety text-ink">
              <HardHat className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div className="leading-tight">
              <div className="font-display text-[1.05rem] tracking-tight text-bone">
                {t('brand', language)}
              </div>
              <div className="text-[10px] font-medium tracking-wide text-muted">
                {t('platformSub', language)}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {(
              [
                ['/train', t('modules', language)],
                ['/models', t('arModels', language)],
                ['/wallet', t('wallet', language)],
                ['/verify', t('verifyCert', language)],
                ['/admin', t('admin', language)],
              ] as const
            ).map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleOffline}
              className="flex h-8 items-center gap-1.5 rounded border border-line px-2.5 text-xs text-muted transition hover:border-line-strong hover:text-soft"
              title="Connectivity"
            >
              {offlineMode ? (
                <WifiOff className="h-3.5 w-3.5 text-safety" />
              ) : (
                <Wifi className="h-3.5 w-3.5 text-forge" />
              )}
              <span className="hidden lg:inline">
                {offlineMode ? t('offline', language) : t('online', language)}
              </span>
            </button>

            <div className="flex h-8 items-center rounded border border-line p-0.5">
              {langs.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLanguage(l.id)}
                  className={`rounded px-2 py-1 text-[11px] font-semibold tracking-wide ${
                    language === l.id
                      ? 'bg-panel-2 text-bone'
                      : 'text-muted hover:text-soft'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {user ? (
              <div className="flex items-center gap-1.5">
                <Link
                  to="/train"
                  className="hidden h-8 max-w-[120px] items-center truncate rounded border border-line bg-panel px-2.5 text-xs font-medium text-soft sm:flex"
                >
                  {user.name.split(' ')[0]}
                </Link>
                <button
                  type="button"
                  onClick={onLogout}
                  className="flex h-8 items-center gap-1 rounded border border-line px-2.5 text-xs text-muted hover:border-oxide/50 hover:text-oxide"
                  title={t('logout', language)}
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{t('logout', language)}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Link
                  to="/login"
                  className="hidden h-8 items-center rounded border border-line px-2.5 text-xs text-soft sm:flex"
                >
                  {t('loginTitle', language)}
                </Link>
                <Link to="/register" className="btn btn-primary !h-8 !px-3 !text-xs">
                  {t('registerNav', language)}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-line md:hidden">
          <div className="-mx-0 flex gap-1 overflow-x-auto px-2 py-1.5 [scrollbar-width:none]">
            {(
              [
                ['/train', t('modules', language)],
                ['/models', t('arModels', language)],
                ['/wallet', t('wallet', language)],
                ['/verify', t('verifyCert', language)],
                ['/admin', t('admin', language)],
                ...(user
                  ? []
                  : ([
                      ['/login', t('loginTitle', language)],
                      ['/register', t('registerNav', language)],
                    ] as const)),
              ] as const
            ).map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `shrink-0 rounded px-2.5 py-1.5 text-xs font-medium ${
                    isActive ? 'bg-panel-2 text-safety' : 'text-muted'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            {user && (
              <button
                type="button"
                onClick={onLogout}
                className="shrink-0 rounded px-2.5 py-1.5 text-xs font-medium text-oxide"
              >
                {t('logout', language)}
              </button>
            )}
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-safety">
      {children}
    </div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
      <div>
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        <h1 className="font-display text-3xl tracking-tight text-bone sm:text-[2rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-xl text-[0.95rem] text-muted">{description}</p>
        )}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  )
}

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StoreProvider, useStore } from './store'
import { Landing } from './pages/Landing'
import { TrainHub } from './pages/TrainHub'
import { ArSession, ModuleDetail } from './pages/ArTraining'
import { QuizPage } from './pages/Quiz'
import { CertificatePage, WalletPage } from './pages/Certificate'
import { VerifyPage } from './pages/Verify'
import { AdminPage } from './pages/Admin'
import { ModelsGallery } from './components/ModelsGallery'
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { Shell } from './components/Shell'
import { t } from './i18n'
import { Link } from 'react-router-dom'

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, language } = useStore()
  if (!user) {
    return (
      <Shell solid>
        <main className="mx-auto max-w-md px-4 py-16 text-center">
          <p className="text-muted">{t('loginRequired', language)}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/login" className="btn btn-primary !text-sm">
              {t('loginTitle', language)}
            </Link>
            <Link to="/register" className="btn btn-secondary !text-sm">
              {t('registerNav', language)}
            </Link>
          </div>
        </main>
      </Shell>
    )
  }
  return children
}

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/onboard" element={<Navigate to="/register" replace />} />
          <Route
            path="/train"
            element={
              <RequireAuth>
                <TrainHub />
              </RequireAuth>
            }
          />
          <Route path="/models" element={<ModelsGallery />} />
          <Route
            path="/module/:id"
            element={
              <RequireAuth>
                <ModuleDetail />
              </RequireAuth>
            }
          />
          <Route
            path="/module/:id/ar"
            element={
              <RequireAuth>
                <ArSession />
              </RequireAuth>
            }
          />
          <Route
            path="/module/:id/quiz"
            element={
              <RequireAuth>
                <QuizPage />
              </RequireAuth>
            }
          />
          <Route
            path="/module/:id/certificate"
            element={
              <RequireAuth>
                <CertificatePage />
              </RequireAuth>
            }
          />
          <Route
            path="/wallet"
            element={
              <RequireAuth>
                <WalletPage />
              </RequireAuth>
            }
          />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

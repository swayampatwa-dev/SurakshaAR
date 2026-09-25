import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { MODULES } from './data/modules'
import {
  DEMO_ATTEMPTS,
  DEMO_CERTIFICATES,
  toStoreWorkers,
} from './data/demo'
import type {
  AppState,
  AuthAccount,
  Certificate,
  Lang,
  QuizAttempt,
  Sector,
  WorkerProfile,
} from './types'

const STORAGE_KEY = 'suraksha-ar-state-v4'

const DEMO_ACCOUNTS: AuthAccount[] = [
  {
    id: 'acc-demo-1',
    name: 'रमेश उराँव',
    email: 'ramesh@dhanbad.in',
    phone: '9876543210',
    password: 'suraksha123',
    sector: 'mining',
    site: 'धनबाद कोलियरी यूनिट-३',
    daysOnSite: 18,
    language: 'hi',
    role: 'trainee',
    createdAt: '2026-09-01T00:00:00.000Z',
  },
  {
    id: 'acc-demo-2',
    name: 'सुमन मुंडा',
    email: 'suman@koderma.in',
    phone: '9876501234',
    password: 'train123',
    sector: 'mica',
    site: 'कोडरमा प्रसंस्करण यार्ड',
    daysOnSite: 6,
    language: 'sat',
    role: 'trainee',
    createdAt: '2026-09-10T00:00:00.000Z',
  },
  {
    id: 'acc-demo-3',
    name: 'Site Supervisor',
    email: 'supervisor@jharkhand.gov.in',
  phone: '9000001122',
    password: 'admin123',
    sector: 'mining',
    site: 'DGMS Coordination Cell',
    daysOnSite: 400,
    language: 'en',
    role: 'supervisor',
    createdAt: '2026-08-01T00:00:00.000Z',
  },
]

function accountToWorker(acc: AuthAccount): WorkerProfile {
  return {
    id: acc.id,
    name: acc.name,
    sector: acc.sector,
    site: acc.site,
    daysOnSite: acc.daysOnSite,
    language: acc.language,
    createdAt: acc.createdAt,
  }
}

function freshState(): AppState {
  return {
    worker: null,
    user: null,
    accounts: DEMO_ACCOUNTS,
    offlineMode: false,
    language: 'hi',
    progress: {},
    attempts: DEMO_ATTEMPTS,
    certificates: DEMO_CERTIFICATES,
    demoWorkers: toStoreWorkers(),
  }
}

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as AppState
      const demoIds = new Set(toStoreWorkers().map((w) => w.id))
      const mergedWorkers = [
        ...parsed.demoWorkers.filter((w) => !demoIds.has(w.id)),
        ...toStoreWorkers().map((seed) => {
          const existing = parsed.demoWorkers.find((w) => w.id === seed.id)
          return existing ?? seed
        }),
      ]
      const certIds = new Set((parsed.certificates ?? []).map((c) => c.id))
      const mergedCerts = [
        ...(parsed.certificates ?? []),
        ...DEMO_CERTIFICATES.filter((c) => !certIds.has(c.id)),
      ]
      const accountEmails = new Set((parsed.accounts ?? []).map((a) => a.email.toLowerCase()))
      const mergedAccounts = [
        ...(parsed.accounts ?? []),
        ...DEMO_ACCOUNTS.filter((a) => !accountEmails.has(a.email.toLowerCase())),
      ]
      return {
        ...freshState(),
        ...parsed,
        accounts: mergedAccounts.length ? mergedAccounts : DEMO_ACCOUNTS,
        demoWorkers: mergedWorkers.length ? mergedWorkers : toStoreWorkers(),
        certificates: mergedCerts.length ? mergedCerts : DEMO_CERTIFICATES,
        attempts: parsed.attempts?.length ? parsed.attempts : DEMO_ATTEMPTS,
        user: parsed.user ?? null,
        worker: parsed.worker ?? null,
      }
    }
  } catch {
    /* ignore */
  }
  return freshState()
}

interface StoreApi extends AppState {
  setLanguage: (lang: Lang) => void
  toggleOffline: () => void
  registerWorker: (data: {
    name: string
    sector: Sector
    site: string
    daysOnSite: number
    language: Lang
  }) => void
  registerAccount: (data: {
    name: string
    email: string
    phone: string
    password: string
    sector: Sector
    site: string
    daysOnSite: number
    language: Lang
  }) => { ok: true } | { ok: false; error: string }
  login: (
    email: string,
    password: string,
  ) => { ok: true } | { ok: false; error: string }
  logout: () => void
  completeStep: (moduleId: string, stepId: string) => void
  submitQuiz: (moduleId: string, answers: number[]) => Certificate | null
  getModuleProgress: (moduleId: string) => {
    completedSteps: string[]
    quizPassed: boolean
    percent: number
  }
  findCertificate: (id: string) => Certificate | undefined
  clearWorkerSession: () => void
}

const StoreContext = createContext<StoreApi | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => loadState())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const setLanguage = useCallback((language: Lang) => {
    setState((s) => ({
      ...s,
      language,
      worker: s.worker ? { ...s.worker, language } : s.worker,
      user: s.user ? { ...s.user, language } : s.user,
    }))
  }, [])

  const toggleOffline = useCallback(() => {
    setState((s) => ({ ...s, offlineMode: !s.offlineMode }))
  }, [])

  const registerWorker = useCallback(
    (data: {
      name: string
      sector: Sector
      site: string
      daysOnSite: number
      language: Lang
    }) => {
      const worker: WorkerProfile = {
        id: `w-${Date.now()}`,
        name: data.name,
        sector: data.sector,
        site: data.site,
        daysOnSite: data.daysOnSite,
        language: data.language,
        createdAt: new Date().toISOString(),
      }
      setState((s) => ({
        ...s,
        worker,
        language: data.language,
        demoWorkers: [
          {
            id: worker.id,
            name: worker.name,
            sector: worker.sector,
            site: worker.site,
            modulesDone: [],
            lastActive: new Date().toISOString().slice(0, 10),
          },
          ...s.demoWorkers.filter((w) => w.id !== worker.id),
        ],
      }))
    },
    [],
  )

  const registerAccount = useCallback(
    (data: {
      name: string
      email: string
      phone: string
      password: string
      sector: Sector
      site: string
      daysOnSite: number
      language: Lang
    }): { ok: true } | { ok: false; error: string } => {
      const email = data.email.trim().toLowerCase()
      if (!email || !data.password || !data.name.trim() || !data.site.trim()) {
        return { ok: false, error: 'missing' }
      }
      if (state.accounts.some((a) => a.email.toLowerCase() === email)) {
        return { ok: false, error: 'exists' }
      }
      const account: AuthAccount = {
        id: `acc-${Date.now()}`,
        name: data.name.trim(),
        email,
        phone: data.phone.trim(),
        password: data.password,
        sector: data.sector,
        site: data.site.trim(),
        daysOnSite: data.daysOnSite,
        language: data.language,
        role: 'trainee',
        createdAt: new Date().toISOString(),
      }
      const worker = accountToWorker(account)
      setState((s) => ({
        ...s,
        accounts: [account, ...s.accounts],
        user: account,
        worker,
        language: data.language,
        demoWorkers: [
          {
            id: worker.id,
            name: worker.name,
            sector: worker.sector,
            site: worker.site,
            modulesDone: [],
            lastActive: new Date().toISOString().slice(0, 10),
          },
          ...s.demoWorkers.filter((w) => w.id !== worker.id),
        ],
      }))
      return { ok: true }
    },
    [state.accounts],
  )

  const login = useCallback(
    (
      email: string,
      password: string,
    ): { ok: true } | { ok: false; error: string } => {
      const normalized = email.trim().toLowerCase()
      const account = state.accounts.find(
        (a) => a.email.toLowerCase() === normalized && a.password === password,
      )
      if (!account) return { ok: false, error: 'invalid' }
      const worker = accountToWorker(account)
      setState((s) => ({
        ...s,
        user: account,
        worker,
        language: account.language,
        demoWorkers: s.demoWorkers.some((w) => w.id === worker.id)
          ? s.demoWorkers
          : [
              {
                id: worker.id,
                name: worker.name,
                sector: worker.sector,
                site: worker.site,
                modulesDone: [],
                lastActive: new Date().toISOString().slice(0, 10),
              },
              ...s.demoWorkers,
            ],
      }))
      return { ok: true }
    },
    [state.accounts],
  )

  const logout = useCallback(() => {
    setState((s) => ({ ...s, user: null, worker: null }))
  }, [])

  const completeStep = useCallback((moduleId: string, stepId: string) => {
    setState((s) => {
      const prev = s.progress[moduleId] ?? {
        completedSteps: [],
        quizPassed: false,
      }
      if (prev.completedSteps.includes(stepId)) return s
      return {
        ...s,
        progress: {
          ...s.progress,
          [moduleId]: {
            ...prev,
            completedSteps: [...prev.completedSteps, stepId],
          },
        },
      }
    })
  }, [])

  const submitQuiz = useCallback(
    (moduleId: string, answers: number[]): Certificate | null => {
      const mod = MODULES.find((m) => m.id === moduleId)
      if (!mod || !state.worker) return null

      let correct = 0
      mod.quiz.forEach((q, i) => {
        if (answers[i] === q.correctIndex) correct += 1
      })
      const score = Math.round((correct / mod.quiz.length) * 100)
      const passed = score >= mod.passScore

      const attempt: QuizAttempt = {
        moduleId,
        score,
        passed,
        answers,
        at: new Date().toISOString(),
      }

      if (!passed) {
        setState((s) => ({ ...s, attempts: [attempt, ...s.attempts] }))
        return null
      }

      const cert: Certificate = {
        id: `JH-SIH-${moduleId.slice(0, 4).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`,
        workerId: state.worker.id,
        workerName: state.worker.name,
        moduleId,
        moduleTitle: mod.title.en,
        sector: state.worker.sector,
        score,
        issuedAt: new Date().toISOString(),
        language: state.language,
      }

      setState((s) => {
        const prev = s.progress[moduleId] ?? {
          completedSteps: [],
          quizPassed: false,
        }
        return {
          ...s,
          attempts: [attempt, ...s.attempts],
          certificates: [
            cert,
            ...s.certificates.filter(
              (c) => c.moduleId !== moduleId || c.workerId !== cert.workerId,
            ),
          ],
          progress: {
            ...s.progress,
            [moduleId]: { ...prev, quizPassed: true },
          },
          demoWorkers: s.demoWorkers.map((w) =>
            w.id === s.worker?.id
              ? {
                  ...w,
                  modulesDone: Array.from(new Set([...w.modulesDone, moduleId])),
                  lastActive: new Date().toISOString().slice(0, 10),
                }
              : w,
          ),
        }
      })

      return cert
    },
    [state.worker, state.language],
  )

  const getModuleProgress = useCallback(
    (moduleId: string) => {
      const mod = MODULES.find((m) => m.id === moduleId)
      const prev = state.progress[moduleId] ?? {
        completedSteps: [],
        quizPassed: false,
      }
      const total = mod?.steps.length || 1
      const stepPct = (prev.completedSteps.length / total) * 80
      const quizPct = prev.quizPassed ? 20 : 0
      return {
        ...prev,
        percent: Math.round(stepPct + quizPct),
      }
    },
    [state.progress],
  )

  const findCertificate = useCallback(
    (id: string) => state.certificates.find((c) => c.id === id),
    [state.certificates],
  )

  const clearWorkerSession = useCallback(() => {
    setState((s) => ({ ...s, worker: null, user: null }))
  }, [])

  const api = useMemo<StoreApi>(
    () => ({
      ...state,
      setLanguage,
      toggleOffline,
      registerWorker,
      registerAccount,
      login,
      logout,
      completeStep,
      submitQuiz,
      getModuleProgress,
      findCertificate,
      clearWorkerSession,
    }),
    [
      state,
      setLanguage,
      toggleOffline,
      registerWorker,
      registerAccount,
      login,
      logout,
      completeStep,
      submitQuiz,
      getModuleProgress,
      findCertificate,
      clearWorkerSession,
    ],
  )

  return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

export type Lang = 'en' | 'hi' | 'sat'
export type Sector = 'mining' | 'steel' | 'mica'
export type ModuleStatus = 'locked' | 'available' | 'in_progress' | 'completed'

export interface WorkerProfile {
  id: string
  name: string
  sector: Sector
  site: string
  language: Lang
  daysOnSite: number
  createdAt: string
}

export interface QuizQuestion {
  id: string
  question: Record<Lang, string>
  options: Record<Lang, string[]>
  correctIndex: number
}

export type OverlayType =
  | 'exit'
  | 'extinguisher'
  | 'evacuate'
  | 'hazard'
  | 'ppe'
  | 'buddy'
  | 'alarm'
  | 'assembly'
  | 'smoke_crawl'
  | 'fire_blanket'
  | 'gas_meter'
  | 'respirator'
  | 'tripod'
  | 'ventilation'
  | 'loto'
  | 'conveyor_guard'
  | 'barrier'
  | 'cap_lamp'
  | 'gloves_boots'
  | 'warning_sign'
  | 'first_aid'
  | 'eyewash'

export interface ArStep {
  id: string
  title: Record<Lang, string>
  instruction: Record<Lang, string>
  hint: Record<Lang, string>
  actionLabel: Record<Lang, string>
  overlayType: OverlayType
  choices?: { id: string; label: Record<Lang, string>; correct: boolean }[]
  sequence?: string[]
}

export interface TrainingModule {
  id: string
  code: string
  domain: string
  title: Record<Lang, string>
  summary: Record<Lang, string>
  durationMin: number
  status: ModuleStatus
  color: string
  icon: string
  steps: ArStep[]
  quiz: QuizQuestion[]
  passScore: number
}

export interface QuizAttempt {
  moduleId: string
  score: number
  passed: boolean
  answers: number[]
  at: string
}

export interface Certificate {
  id: string
  workerId: string
  workerName: string
  moduleId: string
  moduleTitle: string
  sector: Sector
  score: number
  issuedAt: string
  language: Lang
}

export interface AuthAccount {
  id: string
  name: string
  email: string
  phone: string
  password: string
  sector: Sector
  site: string
  daysOnSite: number
  language: Lang
  role: 'trainee' | 'supervisor'
  createdAt: string
}

export interface AppState {
  worker: WorkerProfile | null
  user: AuthAccount | null
  accounts: AuthAccount[]
  offlineMode: boolean
  language: Lang
  progress: Record<string, { completedSteps: string[]; quizPassed: boolean }>
  attempts: QuizAttempt[]
  certificates: Certificate[]
  demoWorkers: Array<{
    id: string
    name: string
    sector: Sector
    site: string
    modulesDone: string[]
    lastActive: string
  }>
}

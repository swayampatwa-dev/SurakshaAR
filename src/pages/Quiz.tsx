import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { Shell, PageHeader } from '../components/Shell'
import { MODULES } from '../data/modules'
import { t, tf } from '../i18n'
import { useStore } from '../store'

export function QuizPage() {
  const { id } = useParams()
  const nav = useNavigate()
  const { worker, language, submitQuiz, getModuleProgress } = useStore()
  const mod = MODULES.find((m) => m.id === id)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null)

  const questions = useMemo(() => mod?.quiz ?? [], [mod])

  if (!worker) return <Navigate to="/onboard" replace />
  if (!mod || !mod.quiz.length) return <Navigate to="/train" replace />

  const prog = getModuleProgress(mod.id)
  if (prog.completedSteps.length < mod.steps.length && !result) {
    return <Navigate to={`/module/${mod.id}/ar`} replace />
  }

  const allAnswered =
    answers.length === mod.quiz.length && answers.every((a) => a !== undefined && a >= 0)

  const onSubmit = () => {
    const cert = submitQuiz(mod.id, answers)
    const score = Math.round(
      (mod.quiz.filter((q, i) => answers[i] === q.correctIndex).length / mod.quiz.length) *
        100,
    )
    const passed = score >= mod.passScore
    setResult({ score, passed })
    if (cert) {
      window.setTimeout(() => nav(`/module/${mod.id}/certificate`), 800)
    }
  }

  return (
    <Shell solid>
      <main className="mx-auto max-w-2xl px-4 py-10">
        <PageHeader
          eyebrow={`${t('assessEyebrow', language)} · ${mod.code}`}
          title={mod.title[language]}
          description={tf('assessDesc', language, { n: mod.passScore })}
        />

        <div className="mt-8 space-y-4">
          {questions.map((q, qi) => (
            <div key={q.id} className="card p-5">
              <div className="text-sm font-semibold text-bone">
                <span className="mr-2 text-muted">{qi + 1}.</span>
                {q.question[language]}
              </div>
              <div className="mt-3 space-y-2">
                {q.options[language].map((opt, oi) => (
                  <button
                    key={oi}
                    type="button"
                    disabled={!!result}
                    onClick={() => {
                      setAnswers((prev) => {
                        const next = [...prev]
                        next[qi] = oi
                        return next
                      })
                    }}
                    className={`block w-full rounded border px-3 py-2.5 text-left text-sm transition ${
                      answers[qi] === oi
                        ? 'border-safety bg-safety-soft text-bone'
                        : 'border-line text-muted hover:border-line-strong'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {result && (
          <div
            className={`card mt-6 px-4 py-3 text-sm ${
              result.passed ? 'border-forge/40' : 'border-oxide/40'
            }`}
          >
            {t('score', language)}{' '}
            <strong className="text-bone">{result.score}%</strong> —{' '}
            {result.passed ? t('pass', language) : t('fail', language)}
            {!result.passed && (
              <button
                type="button"
                className="ml-3 text-safety underline"
                onClick={() => {
                  setResult(null)
                  setAnswers([])
                }}
              >
                {t('retryAssess', language)}
              </button>
            )}
          </div>
        )}

        {!result && (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={onSubmit}
            className="btn btn-primary mt-8 w-full"
          >
            {t('submitQuiz', language)}
          </button>
        )}

        {result?.passed && (
          <Link
            to={`/module/${mod.id}/certificate`}
            className="mt-4 block text-center text-sm text-safety hover:underline"
          >
            {t('openCertArrow', language)}
          </Link>
        )}
      </main>
    </Shell>
  )
}

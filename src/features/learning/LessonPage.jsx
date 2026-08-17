import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { lessons } from './lesson.data'
import { learningSubjects, DEFAULT_SUBJECT_ID } from './pathways.data'
import SubjectIntro from './SubjectIntro'
import LessonVisual from './components/LessonVisual'
import CheckQuestion from './components/checkQuestion'
import Button from '../../components/ui/Button'
import ProgressBar from '../../components/ui/ProgressBar'
import SpaceBackdrop from '../../components/ui/SpaceBackdrop'

const subject = learningSubjects[DEFAULT_SUBJECT_ID]
const STEP_COUNT = 1 + lessons.length // intro + each lesson
const STAGES = Array.from({ length: STEP_COUNT }, () => 1)

export default function LessonPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [pathway, setPathway] = useState(null)
  const [answers, setAnswers] = useState({})

  const isIntro = step === 0
  const lesson = !isIntro ? lessons[step - 1] : null
  const selected = lesson ? answers[lesson.id] ?? null : null
  const answered = selected !== null
  const isLast = step === STEP_COUNT - 1

  const pathwayLabel =
    pathway && pathway !== 'general' ? subject.substreams.find((s) => s.id === pathway)?.label : null

  const stepValid = isIntro ? !!pathway : answered

  function goNext() {
    if (isLast) {
      navigate('/puzzle')
      return
    }
    setStep((s) => Math.min(STEP_COUNT - 1, s + 1))
  }
  function goBack() {
    setStep((s) => Math.max(0, s - 1))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(120%_90%_at_78%_15%,#10142a_0%,var(--color-deep)_45%,var(--color-void)_100%)] font-body text-star">
      <SpaceBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6 py-10 sm:py-14">
        <ProgressBar stages={STAGES} currentStep={step} />

        <div className="flex flex-1 flex-col items-center justify-center gap-8 py-10">
          {isIntro ? (
            <SubjectIntro
              subject={subject}
              selected={pathway}
              onSelect={setPathway}
              onSkip={() => {
                setPathway('general')
                goNext()
              }}
            />
          ) : (
            <>
              <div className="text-center">
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {lesson.tag}
                  {pathwayLabel ? ` · ${pathwayLabel}` : ''}
                </div>
                <h2 className="mb-4 font-display text-3xl italic text-star sm:text-4xl">{lesson.title}</h2>
                <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-slate">{lesson.concept}</p>
              </div>

              <LessonVisual key={lesson.id} visual={lesson.visual} />

              <CheckQuestion
                question={lesson.question}
                selected={selected}
                onSelect={(i) => setAnswers((a) => ({ ...a, [lesson.id]: i }))}
              />
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <Button variant="ghost" onClick={goBack} className={step === 0 ? 'invisible' : ''}>
            Back
          </Button>
          <Button variant="primary" onClick={goNext} disabled={!stepValid}>
            {isLast ? 'To the puzzle →' : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  )
}

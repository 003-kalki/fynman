import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDemoStore } from '../../store/useDemoStore'
import Button from '../../components/ui/Button'
import ProgressBar from '../../components/ui/ProgressBar'
import SpaceBackdrop from '../../components/ui/SpaceBackdrop'
import Motivation from './screens/Motivation'
import GradeSelect from './screens/GradeSelect'
import InterestPicker from './screens/InterestPicker'
import LevelPicker from './screens/LevelPicker'
import MomentumScreen from './screens/MomentumScreen'
import TeaserPuzzle from './screens/TeaserPuzzle'
import PlanPreview from './screens/PlanPreview'

// 3 progress-bar segments grouping the 7 screens: About you / Warm-up / Your plan
const STAGES = [4, 2, 1]
const STEP_COUNT = 7

export default function OnboardingFlow() {
  const navigate = useNavigate()
  const profile = useDemoStore((s) => s.profile)
  const updateProfile = useDemoStore((s) => s.updateProfile)
  const [step, setStep] = useState(0)

  const stepValid = [
    !!profile.motivation,
    !!profile.grade,
    !!profile.subject,
    !!profile.level,
    true,
    !!profile.teaserSolved || !!profile.teaserSkipped,
    true,
  ]
  const isLast = step === STEP_COUNT - 1

  function goNext() {
    if (isLast) {
      navigate('/home')
      return
    }
    setStep((s) => Math.min(STEP_COUNT - 1, s + 1))
  }
  function goBack() {
    setStep((s) => Math.max(0, s - 1))
  }

  function renderScreen() {
    switch (step) {
      case 0:
        return <Motivation value={profile.motivation} onSelect={(v) => updateProfile({ motivation: v })} />
      case 1:
        return <GradeSelect value={profile.grade} onSelect={(v) => updateProfile({ grade: v })} />
      case 2:
        return <InterestPicker value={profile.subject} onSelect={(v) => updateProfile({ subject: v })} />
      case 3:
        return (
          <LevelPicker
            subjectId={profile.subject}
            value={profile.level}
            onSelect={(v) => updateProfile({ level: v })}
          />
        )
      case 4:
        return <MomentumScreen />
      case 5:
        return (
          <TeaserPuzzle
            solved={profile.teaserSolved}
            onSolve={() => updateProfile({ teaserSolved: true })}
            onSkip={() => {
              updateProfile({ teaserSkipped: true })
              goNext()
            }}
          />
        )
      case 6:
        return <PlanPreview subjectId={profile.subject} level={profile.level} grade={profile.grade} />
      default:
        return null
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(120%_90%_at_78%_15%,#10142a_0%,var(--color-deep)_45%,var(--color-void)_100%)] font-body text-star">
      <SpaceBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6 py-10 sm:py-14">
        <ProgressBar stages={STAGES} currentStep={step} />

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full">{renderScreen()}</div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <Button variant="ghost" onClick={goBack} className={step === 0 ? 'invisible' : ''}>
            Back
          </Button>
          <Button variant="primary" onClick={goNext} disabled={!stepValid[step]}>
            {isLast ? "Let's go" : 'Continue'}
          </Button>
        </div>
      </div>
    </div>
  )
}

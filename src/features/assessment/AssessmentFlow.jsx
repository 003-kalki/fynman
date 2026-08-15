import { useState } from 'react'
import AptitudeInteraction from './domains/AptitudeInteraction'
import PersonalityInteraction from './domains/PersonalityInteraction'
import EIInteraction from './domains/EIInteraction'
import CareerInterestInteraction from './domains/CareerInterestInteraction'
import CareerApproachInteraction from './domains/CareerApproachInteraction'
import ResultsScreen from './ResultsScreen'

const domains = [
  AptitudeInteraction,
  PersonalityInteraction,
  EIInteraction,
  CareerInterestInteraction,
  CareerApproachInteraction,
]

function AssessmentFlow() {
  const [step, setStep] = useState(0)
  const done = step >= domains.length
  const Domain = domains[step]

  if (done) {
    return (
      <div className="flex flex-col items-center gap-6 p-8">
        <ResultsScreen />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <Domain />
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm disabled:opacity-40"
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
        >
          Back
        </button>
        <span className="text-sm text-gray-500">
          {step + 1} / {domains.length}
        </span>
        <button
          type="button"
          className="rounded-md bg-purple-600 px-4 py-2 text-sm text-white"
          onClick={() => setStep((s) => s + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default AssessmentFlow

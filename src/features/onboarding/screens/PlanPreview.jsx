import { subjects } from '../onboarding.data'

export default function PlanPreview({ subjectId, level, grade }) {
  const subject = subjects.find((s) => s.id === subjectId)
  const steps = [
    { label: 'Lesson', text: `Two short ${subject?.label || 'STEM'} lessons, built to click fast` },
    { label: 'Puzzle', text: 'A grid-maze puzzle that proves it landed' },
    { label: 'Game', text: 'A quick-fire arcade round to lock it in' },
  ]
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Your plan</div>
      <h2 className="mb-3 font-display text-3xl italic text-star sm:text-4xl">
        {subject?.label || 'Your'} path, {level || 'starter'} level
      </h2>
      <p className="mb-10 max-w-md font-body text-sm leading-relaxed text-slate">
        Grade {grade || '—'}. Here's what's queued up first.
      </p>
      <div className="flex w-full max-w-md flex-col gap-3">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-4 text-left"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line font-mono text-xs text-accent">
              {i + 1}
            </div>
            <div>
              <div className="font-body text-sm font-semibold text-star">{s.label}</div>
              <div className="font-body text-xs text-slate">{s.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

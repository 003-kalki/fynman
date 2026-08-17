export default function CheckQuestion({ question, selected, onSelect }) {
  const answered = selected !== null && selected !== undefined
  const isCorrect = answered && selected === question.correctIndex

  return (
    <div className="w-full">
      <div className="mb-4 font-body text-sm font-semibold text-star">{question.prompt}</div>
      <div className="flex flex-col gap-2.5">
        {question.options.map((option, i) => {
          const isThisCorrect = i === question.correctIndex
          const isThisSelected = i === selected
          let stateClass = 'border-line bg-white/[0.02] hover:border-white/30'
          if (answered && isThisCorrect) {
            stateClass = 'border-accent bg-accent/10 shadow-[0_0_0_1px_rgba(108,140,255,0.4),0_0_16px_rgba(108,140,255,0.2)]'
          } else if (answered && isThisSelected && !isCorrect) {
            stateClass = 'border-line-dim bg-white/[0.02] opacity-70'
          }
          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => onSelect(i)}
              className={[
                'flex items-center justify-between rounded-xl border px-4 py-3 text-left font-body text-sm text-star transition-all duration-150 disabled:cursor-default',
                stateClass,
              ].join(' ')}
            >
              <span>{option}</span>
              {answered && isThisCorrect && <span className="font-mono text-xs text-accent">✓</span>}
              {answered && isThisSelected && !isCorrect && (
                <span className="font-mono text-xs text-slate">your answer</span>
              )}
            </button>
          )
        })}
      </div>
      {answered && (
        <div className="mt-4 font-body text-xs text-slate">
          {isCorrect ? 'Correct — nice.' : "Not quite — the highlighted option is the one."}
        </div>
      )}
    </div>
  )
}

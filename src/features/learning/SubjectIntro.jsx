import Card from '../../components/ui/Card'

export default function SubjectIntro({ subject, selected, onSelect, onSkip }) {
  return (
    <div>
      <div className="mb-10 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{subject.title}</div>
        <h2 className="mb-4 font-display text-3xl italic text-star sm:text-4xl">{subject.hook}</h2>
        <p className="mx-auto max-w-md font-body text-sm leading-relaxed text-slate">{subject.intro}</p>
      </div>

      <div className="mb-6 text-center font-mono text-xs uppercase tracking-[0.1em] text-slate">
        Pick a starting point
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {subject.substreams.map((s) => (
          <Card
            key={s.id}
            glyph={s.glyph}
            title={s.label}
            subtitle={s.blurb}
            selected={selected === s.id}
            onClick={() => onSelect(s.id)}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onSkip}
          className="font-body text-xs text-slate underline decoration-line underline-offset-4 transition-colors hover:text-star"
        >
          Skip — study {subject.title} in general
        </button>
      </div>
    </div>
  )
}

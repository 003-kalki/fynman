import { motivationOptions } from '../onboarding.data'
import Card from '../../../components/ui/Card'

export default function Motivation({ value, onSelect }) {
  return (
    <div>
      <div className="mb-10 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Before we start</div>
        <h2 className="font-display text-3xl italic text-star sm:text-4xl">What brings you here?</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {motivationOptions.map((opt) => (
          <Card
            key={opt.id}
            glyph={opt.glyph}
            title={opt.label}
            subtitle={opt.sub}
            selected={value === opt.id}
            onClick={() => onSelect(opt.id)}
          />
        ))}
      </div>
    </div>
  )
}

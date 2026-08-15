import { subjects } from '../onboarding.data'
import Card from '../../../components/ui/Card'

export default function InterestPicker({ value, onSelect }) {
  return (
    <div>
      <div className="mb-10 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Pick a lane</div>
        <h2 className="font-display text-3xl italic text-star sm:text-4xl">Which STEM subject calls to you?</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {subjects.map((s) => (
          <Card key={s.id} glyph={s.glyph} title={s.label} selected={value === s.id} onClick={() => onSelect(s.id)} />
        ))}
      </div>
    </div>
  )
}

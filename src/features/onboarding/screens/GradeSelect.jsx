import { grades } from '../onboarding.data'
import Card from '../../../components/ui/Card'

export default function GradeSelect({ value, onSelect }) {
  return (
    <div>
      <div className="mb-10 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Quick basics</div>
        <h2 className="font-display text-3xl italic text-star sm:text-4xl">What grade are you in?</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {grades.map((g) => (
          <Card key={g.id} title={g.label} selected={value === g.id} onClick={() => onSelect(g.id)} />
        ))}
      </div>
    </div>
  )
}

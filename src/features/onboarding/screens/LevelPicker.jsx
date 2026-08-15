import { levels, subjects } from '../onboarding.data'
import Card from '../../../components/ui/Card'

export default function LevelPicker({ subjectId, value, onSelect }) {
  const subject = subjects.find((s) => s.id === subjectId)?.label || 'this subject'
  return (
    <div>
      <div className="mb-10 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Be honest</div>
        <h2 className="font-display text-3xl italic text-star sm:text-4xl">
          How much {subject} do you already know?
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {levels.map((l) => (
          <Card
            key={l.id}
            title={l.label}
            subtitle={l.sub(subject)}
            selected={value === l.id}
            onClick={() => onSelect(l.id)}
          />
        ))}
      </div>
    </div>
  )
}

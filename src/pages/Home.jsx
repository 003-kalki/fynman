import { useNavigate } from 'react-router-dom'
import { useDemoStore } from '../store/useDemoStore'
import { subjects, subjectData } from '../features/landing/landing.data'
import Button from '../components/ui/Button'
import SpaceBackdrop from '../components/ui/SpaceBackdrop'

const ACTIVE_ID = 'physics'

export default function Home() {
  const navigate = useNavigate()
  const profile = useDemoStore((s) => s.profile)

  const pickedOther = profile.subject && profile.subject !== ACTIVE_ID
  const pickedLabel = pickedOther ? subjectData[profile.subject]?.title : null

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(120%_90%_at_78%_15%,#10142a_0%,var(--color-deep)_45%,var(--color-void)_100%)] font-body text-star">
      <SpaceBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center px-6 py-14 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Home base</div>
        <h1 className="mb-3 font-display text-3xl italic text-star sm:text-4xl">
          {pickedOther ? `${pickedLabel} is next — Physics is ready now.` : 'Physics is where we left off.'}
        </h1>
        <p className="mb-10 max-w-md font-body text-sm leading-relaxed text-slate">
          This demo only goes deep on one subject so far. Physics has 2 lessons and 1 puzzle ready — the rest of the
          map unlocks as we build it out.
        </p>

        <SubjectOrbit onSelect={() => navigate('/learn')} />

        <Button variant="primary" className="mt-10" onClick={() => navigate('/learn')}>
          Start Physics
        </Button>

        <button
          type="button"
          onClick={() => navigate('/onboarding')}
          className="mt-6 font-body text-xs text-slate underline decoration-line underline-offset-4 transition-colors hover:text-star"
        >
          Restart onboarding
        </button>
      </div>
    </div>
  )
}

function SubjectOrbit({ onSelect }) {
  return (
    <div className="relative h-72 w-72 sm:h-80 sm:w-80">
      <svg viewBox="0 0 500 500" className="h-full w-full" style={{ overflow: 'visible' }}>
        <g>
          {subjects.map((s, i) => {
            const next = subjects[(i + 1) % subjects.length]
            return (
              <line
                key={s.id + '-ring'}
                x1={s.x}
                y1={s.y}
                x2={next.x}
                y2={next.y}
                stroke="var(--color-line-dim)"
                strokeWidth={1.4}
              />
            )
          })}
        </g>
        {subjects.map((s) => {
          const active = s.id === ACTIVE_ID
          return (
            <g key={s.id}>
              <circle
                cx={s.x}
                cy={s.y}
                r={active ? 22 : 14}
                onClick={active ? onSelect : undefined}
                className={active ? 'cursor-pointer' : ''}
                fill={active ? 'rgba(232,176,75,0.15)' : 'var(--color-void)'}
                stroke={active ? 'var(--color-ember)' : 'var(--color-line)'}
                strokeWidth={1.4}
                style={{
                  filter: active ? 'drop-shadow(0 0 12px rgba(232,176,75,0.75))' : 'none',
                  opacity: active ? 1 : 0.55,
                }}
              />
              <text
                x={s.x}
                y={s.y - (active ? 34 : 24)}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={active ? 13 : 11}
                letterSpacing="0.06em"
                fill={active ? 'var(--color-star)' : 'var(--color-slate)'}
                opacity={active ? 1 : 0.6}
              >
                {s.label}
              </text>
              {!active && (
                <text
                  x={s.x}
                  y={s.y + 30}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize={9}
                  letterSpacing="0.08em"
                  fill="var(--color-slate)"
                  opacity={0.45}
                >
                  soon
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

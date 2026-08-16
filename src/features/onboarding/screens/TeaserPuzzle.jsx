import { useState } from 'react'
import { starOrder } from '../onboarding.data'

const CENTER = 150
const RADIUS = 110
const POINTS = Array.from({ length: 5 }, (_, i) => {
  const angle = ((-90 + i * 72) * Math.PI) / 180
  return { x: CENTER + RADIUS * Math.cos(angle), y: CENTER + RADIUS * Math.sin(angle) }
})

export default function TeaserPuzzle({ solved, onSolve, onSkip }) {
  const [progress, setProgress] = useState(0)
  const [shaking, setShaking] = useState(false)

  function handleClick(i) {
    if (solved) return
    if (i === starOrder[progress]) {
      const next = progress + 1
      setProgress(next)
      if (next === starOrder.length) onSolve()
    } else {
      setProgress(0)
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setShaking(true)
        setTimeout(() => setShaking(false), 350)
      }
    }
  }

  const order = solved ? [...starOrder, starOrder[0]] : starOrder.slice(0, progress + 1)
  const segments = order.slice(1).map((idx, i) => [POINTS[order[i]], POINTS[idx]])

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Warm-up</div>
      <h2 className="mb-2 font-display text-3xl italic text-star sm:text-4xl">Draw the star</h2>
      <p className="mb-8 max-w-sm font-body text-sm text-slate">
        Connect the points in order — skip one each time, the same way a five-point star is drawn in a single line.
      </p>

      <svg
        viewBox="0 0 300 300"
        className={'h-64 w-64 sm:h-72 sm:w-72' + (shaking ? ' animate-[shake_0.35s]' : '')}
        style={{ overflow: 'visible' }}
      >
        {segments.map(([a, b], idx) => (
          <line
            key={idx}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-accent)"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 6px rgba(108,140,255,0.7))' }}
          />
        ))}
        {POINTS.map((p, i) => {
          const seqIndex = starOrder.indexOf(i)
          const done = solved || seqIndex < progress
          const isNext = !solved && seqIndex === progress
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={done ? 9 : 7}
              tabIndex={0}
              role="button"
              aria-label={`Star point ${i + 1}`}
              onClick={() => handleClick(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleClick(i)
                }
              }}
              className="cursor-pointer outline-none transition-all duration-200"
              fill={done ? 'var(--color-ember)' : 'var(--color-void)'}
              stroke={done ? 'none' : 'var(--color-line)'}
              strokeWidth={1.4}
              style={{
                filter: done
                  ? 'drop-shadow(0 0 8px rgba(232,176,75,0.75))'
                  : isNext
                  ? 'drop-shadow(0 0 5px rgba(108,140,255,0.5))'
                  : 'none',
              }}
            />
          )
        })}
      </svg>

      {solved ? (
        <div className="mt-8 max-w-sm font-display text-xl italic text-ember">
          Five points, one unbroken line. Lessons work the same way — connect what you know into something new.
        </div>
      ) : (
        <button
          type="button"
          onClick={onSkip}
          className="mt-8 font-body text-xs text-slate underline decoration-line underline-offset-4 transition-colors hover:text-star"
        >
          Skip this step
        </button>
      )}
    </div>
  )
}

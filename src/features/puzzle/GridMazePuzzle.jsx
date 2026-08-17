import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gridSize, start, clues, directions } from './puzzle.data'
import Button from '../../components/ui/Button'
import SpaceBackdrop from '../../components/ui/SpaceBackdrop'

const target = clues.reduce(
  (pos, key) => ({ x: pos.x + directions[key].dx, y: pos.y + directions[key].dy }),
  start
)

export default function GridMazePuzzle() {
  const navigate = useNavigate()
  const [pos, setPos] = useState(start)
  const [progress, setProgress] = useState(0)
  const [shaking, setShaking] = useState(false)

  const solved = progress === clues.length

  function handleMove(key) {
    if (solved) return
    if (key === clues[progress]) {
      const dir = directions[key]
      setPos((p) => ({ x: p.x + dir.dx, y: p.y + dir.dy }))
      setProgress((p) => p + 1)
    } else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShaking(true)
      setTimeout(() => setShaking(false), 350)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(120%_90%_at_78%_15%,#10142a_0%,var(--color-deep)_45%,var(--color-void)_100%)] font-body text-star">
      <SpaceBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-6 py-14 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">One last thing</div>
        <h2 className="mb-2 font-display text-3xl italic text-star sm:text-4xl">Navigate to the target</h2>
        <p className="mb-8 max-w-sm font-body text-sm text-slate">
          Follow the clues in order, one direction at a time.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {clues.map((key, i) => {
            const done = i < progress
            const isNext = i === progress
            return (
              <div
                key={i}
                className={[
                  'flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs transition-all duration-200',
                  done
                    ? 'border-accent bg-accent/10 text-star'
                    : isNext
                    ? 'border-line text-star'
                    : 'border-line-dim text-slate/50',
                ].join(' ')}
              >
                <span>{directions[key].arrow}</span>
                <span>{directions[key].label}</span>
                {done && <span className="text-accent">✓</span>}
              </div>
            )
          })}
        </div>

        <div
          className={'grid gap-1 rounded-2xl border border-line bg-white/[0.02] p-3' + (shaking ? ' animate-[shake_0.35s]' : '')}
          style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, i) => {
            const x = i % gridSize
            const y = Math.floor(i / gridSize)
            const isCharacter = x === pos.x && y === pos.y
            const isTarget = x === target.x && y === target.y
            return (
              <div
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-line-dim sm:h-14 sm:w-14"
              >
                {isCharacter ? (
                  <span
                    className="h-3.5 w-3.5 rounded-full bg-accent transition-all duration-200"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(108,140,255,0.8))' }}
                  />
                ) : isTarget ? (
                  <span
                    className="h-4 w-4 rounded-full border-2 border-dashed border-ember transition-all duration-200"
                    style={solved ? { background: 'var(--color-ember)', filter: 'drop-shadow(0 0 8px rgba(232,176,75,0.75))' } : undefined}
                  />
                ) : null}
              </div>
            )
          })}
        </div>

        {!solved ? (
          <div className="mt-8 grid grid-cols-3 gap-2">
            <span />
            <DirButton dirKey="N" onMove={handleMove} />
            <span />
            <DirButton dirKey="W" onMove={handleMove} />
            <span />
            <DirButton dirKey="E" onMove={handleMove} />
            <span />
            <DirButton dirKey="S" onMove={handleMove} />
            <span />
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="max-w-sm font-display text-xl italic text-ember">
              Target reached. That's the whole loop — learn it, then prove it.
            </div>
            <Button variant="primary" onClick={() => navigate('/home')}>
              Back to Home
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

function DirButton({ dirKey, onMove }) {
  const dir = directions[dirKey]
  return (
    <button
      type="button"
      onClick={() => onMove(dirKey)}
      aria-label={dir.label}
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-line font-display text-xl text-star transition-all duration-150 hover:border-white/40 hover:-translate-y-0.5"
    >
      {dir.arrow}
    </button>
  )
}

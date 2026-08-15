import { useState } from 'react'
import { teaserSequence } from '../onboarding.data'

export default function TeaserPuzzle({ solved, onSolve }) {
  const [progress, setProgress] = useState(0)
  const [shake, setShake] = useState(false)

  function handleClick(i) {
    if (solved) return
    if (i === teaserSequence[progress]) {
      const next = progress + 1
      setProgress(next)
      if (next === teaserSequence.length) onSolve()
    } else {
      setProgress(0)
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!reduced) {
        setShake(true)
        setTimeout(() => setShake(false), 350)
      }
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">Warm-up</div>
      <h2 className="mb-2 font-display text-3xl italic text-star sm:text-4xl">Trace the pattern</h2>
      <p className="mb-8 max-w-sm font-body text-sm text-slate">
        Click the four corners, then the center — that order.
      </p>
      <div className={'grid grid-cols-3 gap-3' + (shake ? ' animate-[shake_0.35s]' : '')}>
        {Array.from({ length: 9 }).map((_, i) => {
          const seqIndex = teaserSequence.indexOf(i)
          const isDone = solved || (seqIndex !== -1 && seqIndex < progress)
          const isTarget = seqIndex !== -1
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleClick(i)}
              disabled={solved}
              className={[
                'flex h-16 w-16 items-center justify-center rounded-xl border transition-all duration-150 sm:h-20 sm:w-20',
                isDone
                  ? 'border-accent bg-accent/15 shadow-[0_0_14px_rgba(108,140,255,0.5)]'
                  : isTarget
                  ? 'border-line hover:border-white/40'
                  : 'border-line-dim',
              ].join(' ')}
            />
          )
        })}
      </div>
      {solved && (
        <div className="mt-8 max-w-sm font-display text-xl italic text-ember">
          Unlocked. That's the whole idea — pattern first, answer second.
        </div>
      )}
    </div>
  )
}

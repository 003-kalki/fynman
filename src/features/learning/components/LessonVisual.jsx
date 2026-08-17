import { useState } from 'react'

const MAX_RANGE = 340
const ORIGIN_X = 30
const GROUND_Y = 170

function trajectoryPoints(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  const v2 = MAX_RANGE // constant launch speed^2, chosen so range(45deg) = MAX_RANGE
  const range = v2 * Math.sin(2 * rad)
  const steps = 40
  const points = []
  for (let i = 0; i <= steps; i++) {
    const x = (range * i) / steps
    const y = x * Math.tan(rad) - x * x / (2 * v2 * Math.cos(rad) * Math.cos(rad))
    points.push(`${ORIGIN_X + x},${GROUND_Y - y}`)
  }
  return { points: points.join(' '), range, landingX: ORIGIN_X + range }
}

function wavePoints(freq) {
  const width = 400
  const height = 160
  const midY = height / 2
  const amplitude = 50
  const steps = 200
  const points = []
  for (let i = 0; i <= steps; i++) {
    const x = (width * i) / steps
    const y = midY + amplitude * Math.sin((2 * Math.PI * freq * x) / width)
    points.push(`${x},${y}`)
  }
  return points.join(' ')
}

export default function LessonVisual({ visual }) {
  const [value, setValue] = useState(visual.default)

  return (
    <div className="w-full rounded-2xl border border-line bg-white/[0.02] p-6">
      <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.1em] text-slate">
        <span>{visual.label}</span>
        <span className="text-accent">
          {value}
          {visual.unit}
        </span>
      </div>
      <input
        type="range"
        min={visual.min}
        max={visual.max}
        step={visual.step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-accent"
        aria-label={visual.label}
      />

      {visual.kind === 'trajectory' && <TrajectoryVisual angle={value} />}
      {visual.kind === 'wave' && <WaveVisual freq={value} />}
    </div>
  )
}

function TrajectoryVisual({ angle }) {
  const { points, range, landingX } = trajectoryPoints(angle)
  const rangePct = Math.round((range / MAX_RANGE) * 100)
  return (
    <div className="mt-6">
      <svg viewBox="0 0 400 200" className="w-full" style={{ overflow: 'visible' }}>
        <line x1={0} y1={GROUND_Y} x2={400} y2={GROUND_Y} stroke="var(--color-line)" strokeWidth={1.4} />
        <polyline
          points={points}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2.5}
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 6px rgba(108,140,255,0.6))' }}
        />
        <circle cx={ORIGIN_X} cy={GROUND_Y} r={5} fill="var(--color-star)" />
        <circle
          cx={landingX}
          cy={GROUND_Y}
          r={6}
          fill="var(--color-ember)"
          style={{ filter: 'drop-shadow(0 0 6px rgba(232,176,75,0.7))' }}
        />
      </svg>
      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.1em] text-slate">
          <span>Range</span>
          <span>{rangePct}% of max</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-line-dim">
          <div
            className="h-full rounded-full bg-ember transition-all duration-200 ease-out"
            style={{ width: `${rangePct}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function WaveVisual({ freq }) {
  const wavelength = Math.round(400 / freq)
  return (
    <div className="mt-6">
      <svg viewBox="0 0 400 160" className="w-full" style={{ overflow: 'visible' }}>
        <line x1={0} y1={80} x2={400} y2={80} stroke="var(--color-line-dim)" strokeWidth={1} strokeDasharray="4 5" />
        <polyline
          points={wavePoints(freq)}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2.5}
          strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 6px rgba(108,140,255,0.6))' }}
        />
      </svg>
      <div className="mt-4 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.1em] text-slate">
        <span>Frequency: {freq} Hz</span>
        <span className="text-ember">Wavelength: {wavelength}px</span>
      </div>
    </div>
  )
}

export const gridSize = 5

export const start = { x: 0, y: 4 }

// Directional clues the player must execute, in order, to reach the target.
export const clues = ['N', 'N', 'E', 'E', 'N']

export const directions = {
  N: { label: 'North', arrow: '↑', dx: 0, dy: -1 },
  S: { label: 'South', arrow: '↓', dx: 0, dy: 1 },
  E: { label: 'East', arrow: '→', dx: 1, dy: 0 },
  W: { label: 'West', arrow: '←', dx: -1, dy: 0 },
}

/** Pure easing helpers – no React, safe to import from pack definitions. */

/** Stepped easing for Motion (8-bit feel). steps(4) → 4 discrete frames. */
export const steps = (n: number) => (t: number) => (t >= 1 ? 1 : Math.floor(t * n) / n)

export const easings = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
  overshoot: [0.34, 1.56, 0.64, 1],
  standard: [0.2, 0, 0, 1],
  expo: [0.16, 1, 0.3, 1],
} as const

export const springs = {
  soft: { type: 'spring', stiffness: 220, damping: 26 },
  snappy: { type: 'spring', stiffness: 520, damping: 32 },
  bouncy: { type: 'spring', stiffness: 420, damping: 14 },
  liquid: { type: 'spring', stiffness: 380, damping: 24, mass: 0.9 },
} as const

export const durations = { xs: 0.12, sm: 0.2, md: 0.32, lg: 0.56, xl: 0.9 } as const

import type { Tone } from './types'

/**
 * Palette foundation. Source of truth for tones; values mirror
 * styles/agility.css → [data-ag-tone]. OKLCH for perceptual consistency.
 */
export const tones: Record<Tone, { label: string; value: string; fg: string; note: string }> = {
  accent: { label: 'Accent', value: 'var(--ag-accent)', fg: 'var(--ag-accent-fg)', note: 'Pack signature' },
  neutral: { label: 'Neutral', value: 'var(--ag-ink)', fg: 'var(--ag-canvas)', note: 'Inverted ink' },
  ocean: { label: 'Ocean', value: 'oklch(0.72 0.15 235)', fg: 'oklch(0.18 0.04 240)', note: 'Info · links' },
  lime: { label: 'Lime', value: 'oklch(0.89 0.2 128)', fg: 'oklch(0.22 0.06 130)', note: 'Success · growth' },
  ember: { label: 'Ember', value: 'oklch(0.74 0.18 50)', fg: 'oklch(0.2 0.05 45)', note: 'Warning · heat' },
  rose: { label: 'Rose', value: 'oklch(0.68 0.21 12)', fg: 'oklch(0.99 0 0)', note: 'Danger · passion' },
  violet: { label: 'Violet', value: 'oklch(0.64 0.22 295)', fg: 'oklch(0.99 0 0)', note: 'Brand · magic' },
}

export const toneList = Object.keys(tones) as Tone[]

/** Semantic pack tokens (CSS custom properties, `--ag-<token>`) */
export const packTokens = ['canvas', 'panel', 'ink', 'muted', 'line', 'accent'] as const

import type { Pack } from '../foundation/types'

export const noise: Pack = {
  id: 'noise',
  name: 'Micro Noise',
  tagline: 'Analog warmth. Film grain on every surface, mono typography.',
  iconStyle: 'line-duotone',
  defaults: {},
  recipe: {
    root: '',
    control: 'ag-box ag-grain ag-focus font-medium',
    field: 'ag-field ag-grain',
    surface: 'ag-panel ag-grain',
    track: 'rounded-full bg-white/[.07] ag-grain',
    thumb: 'rounded-full bg-[#f2ede6] shadow-[0_2px_6px_rgb(0_0_0/.5)]',
    indicator: 'rounded-full bg-[var(--ag-c)] text-[var(--ag-c-fg)] ag-grain',
    item: 'rounded-[calc(var(--ag-r)*.6)] data-[highlighted]:bg-white/[.06]',
    overlay: 'bg-black/60 ag-grain',
    chip: 'rounded-full bg-[var(--ag-c-soft)] text-[var(--ag-c-ink)] font-mono uppercase tracking-[.06em] ag-grain',
    label: 'font-mono text-[11px] uppercase tracking-[.12em] text-[var(--ag-muted)]',
    heading: 'ag-display font-medium uppercase tracking-[-0.05em]',
  },
  motion: {
    transition: { type: 'spring', stiffness: 260, damping: 18 },
    hover: { scale: 1.02, rotate: -0.6 },
    tap: { scale: 0.97 },
    enter: { initial: { opacity: 0, y: 20, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 } },
    stagger: 0.07,
    gsapEase: 'expo.out',
  },
  hero: {
    pattern: 'grid',
    palette: ['#0f0e0d', '#ff5a1f', '#ffd0a8'],
    shader: 'grain',
    eyebrow: 'Micro-noise · analog warmth',
    title: 'Texture is a feature.',
    subtitle: 'Film grain, warm blacks and monospaced rhythm. Digital that remembers it used to be physical.',
  },
}

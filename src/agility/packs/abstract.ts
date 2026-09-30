import type { Pack } from '../foundation/types'

export const abstract: Pack = {
  id: 'abstract',
  name: 'Abstract',
  tagline: 'Graphic system. Hard offsets, bold geometry, loud color.',
  iconStyle: 'broken',
  defaults: {},
  recipe: {
    root: '',
    control: 'ag-box ag-focus font-semibold',
    field: 'ag-field',
    surface: 'ag-panel',
    track: 'rounded-full border-2 border-[var(--ag-ink)] bg-[var(--ag-panel)]',
    thumb: 'rounded-full bg-[var(--ag-ink)]',
    indicator: 'rounded-full bg-[var(--ag-c)] text-[var(--ag-c-fg)]',
    item: 'rounded-[var(--ag-r)] font-medium data-[highlighted]:bg-[var(--ag-c)] data-[highlighted]:text-[var(--ag-c-fg)]',
    overlay: 'bg-[#111]/50',
    chip: 'rounded-full border-2 border-[var(--ag-ink)] bg-[var(--ag-c)] text-[var(--ag-c-fg)] font-semibold',
    label: 'text-[12px] font-semibold uppercase tracking-[.08em]',
    heading: 'ag-display font-bold tracking-[-0.055em]',
  },
  motion: {
    transition: { type: 'spring', stiffness: 520, damping: 16 },
    hover: { x: -2, y: -2 },
    tap: { x: 2, y: 2 },
    enter: { initial: { opacity: 0, y: 30, rotate: -3 }, animate: { opacity: 1, y: 0, rotate: 0 } },
    stagger: 0.07,
    gsapEase: 'back.out(2.2)',
  },
  hero: {
    pattern: 'diagonal',
    palette: ['#f3efe6', '#3b3bff', '#ff4d2e'],
    shader: 'shapes',
    eyebrow: 'Abstract · graphic system',
    title: 'Shapes that speak loud.',
    subtitle: 'Swiss grids met a riso printer. Hard offsets, primary geometry and motion with attitude.',
  },
}

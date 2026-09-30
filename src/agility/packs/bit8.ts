import type { Pack } from '../foundation/types'
import { steps } from '../foundation/easing'

export const bit8: Pack = {
  id: 'bit8',
  name: '8-Bit',
  tagline: 'Press start. Pixel borders, stepped motion, chiptune energy.',
  iconStyle: 'pixel',
  defaults: {},
  recipe: {
    root: 'ag-pixelated',
    control: 'ag-box ag-pixel ag-focus uppercase tracking-[.08em]',
    field: 'ag-field ag-pixel',
    surface: 'ag-panel ag-pixel',
    track: 'ag-pixel !rounded-none bg-[#0d0b1a]',
    thumb: '!rounded-none bg-[var(--ag-accent)] shadow-[inset_-3px_-3px_0_rgb(0_0_0/.3)]',
    indicator: '!rounded-none bg-[var(--ag-c)] text-[var(--ag-c-fg)]',
    item: '!rounded-none uppercase data-[highlighted]:bg-[var(--ag-c)] data-[highlighted]:text-[var(--ag-c-fg)]',
    overlay: 'bg-[#0d0b1a]/80',
    chip: '!rounded-none bg-[var(--ag-c)] text-[var(--ag-c-fg)] uppercase',
    label: 'text-[11px] uppercase tracking-[.1em] text-[var(--ag-muted)]',
    heading: 'ag-display uppercase leading-[1.05] tracking-[-0.02em]',
  },
  motion: {
    transition: { duration: 0.24, ease: steps(4) },
    hover: { y: -3 },
    tap: { y: 2 },
    enter: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
    stagger: 0.1,
    gsapEase: 'steps(6)',
  },
  hero: {
    pattern: 'pixels',
    palette: ['#0d0b1a', '#ff3e7f', '#ffd23f'],
    shader: 'pixel',
    eyebrow: '8-bit · press start',
    title: 'Insert coin to ship.',
    subtitle: 'Pixel-perfect borders, stepped easing and a palette straight out of 1987. Accessibility still AAA.',
  },
}

import type { Pack } from '../foundation/types'

export const matte: Pack = {
  id: 'matte',
  name: 'Matte',
  tagline: 'Quiet luxury. Low gloss, editorial type, calm motion.',
  iconStyle: 'linear',
  defaults: {},
  recipe: {
    root: '',
    control: 'ag-box ag-focus font-medium',
    field: 'ag-field',
    surface: 'ag-panel',
    track: 'rounded-full bg-black/35 shadow-[inset_0_1px_2px_rgb(0_0_0/.5)]',
    thumb: 'rounded-full bg-[#ebe7df] shadow-[0_1px_2px_rgb(0_0_0/.4)]',
    indicator: 'rounded-full bg-[var(--ag-c)] text-[var(--ag-c-fg)]',
    item: 'rounded-[calc(var(--ag-r)*.6)] data-[highlighted]:bg-white/[.05]',
    overlay: 'bg-[#0b0b0c]/70',
    chip: 'rounded-[calc(var(--ag-r)*.6)] bg-[var(--ag-c-soft)] text-[var(--ag-c-ink)]',
    label: 'text-[12px] text-[var(--ag-muted)]',
    heading: 'ag-display font-normal tracking-[-0.02em]',
  },
  motion: {
    transition: { type: 'tween', duration: 0.34, ease: [0.4, 0, 0.2, 1] },
    hover: { y: -1 },
    tap: { scale: 0.985 },
    enter: { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } },
    stagger: 0.06,
    gsapEase: 'power3.out',
  },
  hero: {
    pattern: 'lines',
    palette: ['#141517', '#3a3630', '#d9c7a3'],
    shader: 'matte',
    eyebrow: 'Matte · quiet luxury',
    title: 'Calm surfaces. Serious craft.',
    subtitle: 'No gloss, no noise. Just proportion, rhythm and type doing the heavy lifting.',
  },
}

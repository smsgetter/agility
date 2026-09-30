import type { Pack } from '../foundation/types'

export const liquid: Pack = {
  id: 'liquid',
  name: 'Liquid',
  tagline: 'Apple-grade glass. Refraction, specular edges, living springs.',
  iconStyle: 'bold-duotone',
  defaults: {},
  recipe: {
    root: '',
    control: 'ag-box ag-glass ag-focus font-medium',
    field: 'ag-field ag-glass',
    surface: 'ag-panel ag-glass',
    track: 'rounded-full bg-white/[.08] ag-glass shadow-[inset_0_1px_3px_rgb(0_0_0/.45)]',
    thumb: 'rounded-full bg-white shadow-[0_3px_10px_rgb(0_0_0/.35),inset_0_-1px_1px_rgb(0_0_0/.12)]',
    indicator: 'rounded-full bg-[var(--ag-c)] text-[var(--ag-c-fg)] shadow-[inset_0_1px_0_rgb(255_255_255/.45),0_0_20px_var(--ag-c-soft)]',
    item: 'rounded-[calc(var(--ag-r)*.65)] data-[highlighted]:bg-white/10',
    overlay: 'bg-black/35 backdrop-blur-xl',
    chip: 'ag-glass rounded-full bg-[var(--ag-c-soft)] text-[var(--ag-c-ink)] shadow-[inset_0_1px_0_rgb(255_255_255/.25)]',
    label: 'text-[12px] font-medium text-[var(--ag-muted)]',
    heading: 'ag-display font-semibold tracking-[-0.045em]',
  },
  motion: {
    transition: { type: 'spring', stiffness: 380, damping: 24, mass: 0.9 },
    hover: { scale: 1.035, y: -1 },
    tap: { scale: 0.95 },
    enter: { initial: { opacity: 0, y: 24, filter: 'blur(12px)' }, animate: { opacity: 1, y: 0, filter: 'blur(0px)' } },
    stagger: 0.08,
    gsapEase: 'back.out(1.6)',
  },
  hero: {
    pattern: 'dots',
    palette: ['#05060a', '#2a6cff', '#9be7ff'],
    shader: 'liquid',
    eyebrow: 'Liquid · Apple-grade glass',
    title: 'Interfaces that feel like water.',
    subtitle: 'Refractive glass, specular edges and springs tuned by hand. Built on Ark UI, choreographed with Motion.',
  },
}

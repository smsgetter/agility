import type { Pack } from './types'

/**
 * Fallback pack used when no <AgilityProvider> is mounted.
 * Deliberately neutral (shadcn-grade). `packs/typical.ts` extends it.
 */
export const basePack: Pack = {
  id: 'typical',
  name: 'Typical',
  tagline: 'Honest, systematic, shipping-grade.',
  iconStyle: 'linear',
  defaults: {},
  recipe: {
    root: '',
    control: 'ag-box ag-focus font-medium',
    field: 'ag-field',
    surface: 'ag-panel',
    track: 'rounded-full bg-[var(--ag-line)]',
    thumb: 'rounded-full bg-[var(--ag-ink)] shadow-[0_1px_3px_rgb(0_0_0/.4)]',
    indicator: 'rounded-full bg-[var(--ag-c)] text-[var(--ag-c-fg)]',
    item: 'rounded-[calc(var(--ag-r)*.6)] data-[highlighted]:bg-[var(--ag-line)]',
    overlay: 'bg-black/60 backdrop-blur-[2px]',
    chip: 'rounded-full bg-[var(--ag-c-soft)] text-[var(--ag-c-ink)]',
    label: 'text-[12px] font-medium text-[var(--ag-muted)]',
    heading: 'ag-display font-semibold tracking-[-0.035em]',
  },
  motion: {
    transition: { type: 'tween', duration: 0.2, ease: [0.2, 0, 0, 1] },
    hover: { y: -1 },
    tap: { scale: 0.98 },
    enter: { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } },
    stagger: 0.05,
    gsapEase: 'power3.out',
  },
  hero: {
    pattern: 'grid',
    palette: ['#09090b', '#1f1f23', '#6366f1'],
    shader: 'waves',
    eyebrow: 'Typical · production default',
    title: 'Build interfaces that simply work.',
    subtitle: 'The honest baseline: accessible Ark UI primitives, sane tokens, zero gimmicks. Ship on Monday.',
  },
}

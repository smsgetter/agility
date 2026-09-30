import type { Border, Radius, Size, Surface, Tone, VariationProps } from './types'

/**
 * Auto-variation engine.
 * Every element exposes the same axes; values become data-attributes that
 * flip CSS custom properties (see styles/agility.css). Zero runtime class
 * generation, fully cascading: set `tone` on a parent and children inherit.
 */
export const variationAxes = {
  tone: ['accent', 'neutral', 'ocean', 'lime', 'ember', 'rose', 'violet'] as Tone[],
  surface: ['solid', 'soft', 'outline', 'ghost'] as Surface[],
  border: ['none', 'hairline', 'solid', 'glow'] as Border[],
  radius: ['none', 'sm', 'md', 'lg', 'full'] as Radius[],
  size: ['sm', 'md', 'lg'] as Size[],
}

export type Axis = keyof typeof variationAxes
export type VariationAttrs = Record<`data-ag${string}`, string | undefined>

export function vx(v: VariationProps = {}): VariationAttrs {
  return {
    'data-ag': '',
    'data-ag-tone': v.tone,
    'data-ag-border': v.border,
    'data-ag-radius': v.radius,
    'data-ag-size': v.size,
    'data-ag-surface': v.surface,
  }
}

/** Merge layers left → right, ignoring `undefined` (so defaults survive). */
export function mergeVariation(...layers: (VariationProps | undefined)[]): VariationProps {
  const out: Record<string, unknown> = {}
  for (const layer of layers) {
    if (!layer) continue
    for (const [k, val] of Object.entries(layer)) if (val !== undefined) out[k] = val
  }
  return out as VariationProps
}

/** Pull variation props off a props bag → [data-attrs, rest]. */
export function splitVx<P extends VariationProps>(props: P, defaults: VariationProps = {}) {
  const { tone, border, radius, size, surface, ...rest } = props
  return [vx(mergeVariation(defaults, { tone, border, radius, size, surface })), rest as Omit<P, Axis>] as const
}

/** Cartesian product of axes → every generated variant (used by the matrix). */
export function permutations(axes: Axis[]): VariationProps[] {
  return axes.reduce<VariationProps[]>(
    (acc, axis) => acc.flatMap((v) => (variationAxes[axis] as string[]).map((value) => ({ ...v, [axis]: value }))),
    [{}],
  )
}

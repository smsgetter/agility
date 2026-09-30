import type { TargetAndTransition, Transition } from 'motion/react'

export type PackId = 'liquid' | 'matte' | 'bit8' | 'noise' | 'abstract' | 'typical'

/* ── Auto-variation axes ── */
export type Tone = 'accent' | 'neutral' | 'ocean' | 'lime' | 'ember' | 'rose' | 'violet'
export type Border = 'none' | 'hairline' | 'solid' | 'glow'
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'full'
export type Size = 'sm' | 'md' | 'lg'
export type Surface = 'solid' | 'soft' | 'outline' | 'ghost'

export interface VariationProps {
  tone?: Tone
  border?: Border
  radius?: Radius
  size?: Size
  surface?: Surface
}

export type Pattern = 'none' | 'dots' | 'lines' | 'grid' | 'diagonal' | 'pixels'
export type IconStyle = 'linear' | 'bold' | 'bold-duotone' | 'broken' | 'line-duotone' | 'pixel'
export type ShaderMode = 'liquid' | 'matte' | 'pixel' | 'grain' | 'shapes' | 'waves'

/** Style slots every element composes from. A pack = one recipe per slot. */
export type Slot =
  | 'root'
  | 'control'
  | 'field'
  | 'surface'
  | 'track'
  | 'thumb'
  | 'indicator'
  | 'item'
  | 'overlay'
  | 'chip'
  | 'label'
  | 'heading'

export type Recipe = Record<Slot, string>

export interface MotionProfile {
  transition: Transition
  hover: TargetAndTransition
  tap: TargetAndTransition
  enter: { initial: TargetAndTransition; animate: TargetAndTransition }
  stagger: number
  /** GSAP ease string for timeline-driven pieces (split text, scroll) */
  gsapEase: string
}

export interface HeroPreset {
  pattern: Pattern
  /** [base, mid, highlight] – hex, consumed by gradient mesh + shader */
  palette: [string, string, string]
  shader: ShaderMode
  eyebrow: string
  title: string
  subtitle: string
}

export interface Pack {
  id: PackId
  name: string
  tagline: string
  iconStyle: IconStyle
  recipe: Recipe
  motion: MotionProfile
  hero: HeroPreset
  defaults: VariationProps
}

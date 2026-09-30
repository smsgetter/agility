import { Icon as Iconify } from '@iconify/react'
import { usePack } from './provider'
import { cn } from './cn'
import type { IconStyle } from './types'

/**
 * Semantic icon map → [Solar base name, Pixelarticons name | null].
 * Solar ships 6 styles per glyph (linear, bold, bold-duotone, broken,
 * line-duotone, outline), so each pack picks a style, not a new set.
 * The 8-bit pack switches to Pixelarticons where a glyph exists.
 */
export const icons = {
  'arrow-right': ['arrow-right', 'arrow-right'],
  'chevron-down': ['alt-arrow-down', 'chevron-down'],
  'chevron-left': ['alt-arrow-left', 'chevron-left'],
  'chevron-right': ['alt-arrow-right', 'chevron-right'],
  check: ['check-circle', 'check'],
  close: ['close-circle', 'close'],
  plus: ['add-circle', 'plus'],
  minus: ['minus-circle', 'minus'],
  star: ['star', null],
  heart: ['heart', 'heart'],
  search: ['magnifer', 'search'],
  home: ['home-2', 'home'],
  user: ['user-circle', 'user'],
  settings: ['settings', null],
  copy: ['copy', 'copy'],
  trash: ['trash-bin-trash', 'trash'],
  edit: ['pen', 'edit'],
  bell: ['bell-bing', 'notification'],
  info: ['info-circle', 'info-box'],
  warning: ['danger-triangle', 'warning-box'],
  play: ['play', 'play'],
  pause: ['pause', 'pause'],
  bolt: ['bolt', 'zap'],
  chart: ['chart-2', 'chart'],
  cursor: ['cursor', null],
  'magic-stick': ['magic-stick-3', null],
  widget: ['widget-5', null],
  layers: ['layers', null],
  share: ['share', null],
  letter: ['letter', 'mail'],
  rocket: ['rocket-2', null],
  palette: ['palette', null],
  code: ['code-square', 'code'],
  more: ['menu-dots', null],
  calendar: ['calendar', 'calendar'],
  folder: ['folder', 'folder'],
  camera: ['camera', 'camera'],
  music: ['music-note-2', 'music'],
} as const satisfies Record<string, readonly [string, string | null]>

export type IconName = keyof typeof icons

export function resolveIcon(name: IconName, style: IconStyle): string {
  const [solar, pixel] = icons[name] as readonly [string, string | null]
  if (style === 'pixel') return pixel ? `pixelarticons:${pixel}` : `solar:${solar}-bold`
  return `solar:${solar}-${style}`
}

export interface IconProps {
  /** Semantic name, or any raw Iconify id (e.g. "solar:atom-bold-duotone") */
  name: IconName | (string & {})
  style?: IconStyle
  size?: number | string
  className?: string
}

export function Icon({ name, style, size = '1.15em', className }: IconProps) {
  const { pack } = usePack()
  const id = name in icons ? resolveIcon(name as IconName, style ?? pack.iconStyle) : name
  return <Iconify icon={id} width={size} height={size} aria-hidden className={cn('shrink-0', className)} />
}

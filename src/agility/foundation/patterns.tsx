import type { CSSProperties } from 'react'
import { cn } from './cn'
import type { Pattern } from './types'

const layers: Record<Exclude<Pattern, 'none'>, CSSProperties> = {
  dots: { backgroundImage: 'radial-gradient(var(--ag-pattern) 1.1px, transparent 1.5px)', backgroundSize: '22px 22px' },
  lines: { backgroundImage: 'linear-gradient(var(--ag-pattern) 1px, transparent 1px)', backgroundSize: '100% 32px' },
  grid: {
    backgroundImage: 'linear-gradient(var(--ag-pattern) 1px, transparent 1px), linear-gradient(90deg, var(--ag-pattern) 1px, transparent 1px)',
    backgroundSize: '56px 56px',
  },
  diagonal: { backgroundImage: 'repeating-linear-gradient(45deg, var(--ag-pattern) 0 1px, transparent 1px 14px)' },
  pixels: {
    backgroundImage: 'conic-gradient(var(--ag-pattern) 25%, transparent 0 50%, var(--ag-pattern) 0 75%, transparent 0)',
    backgroundSize: '24px 24px',
    imageRendering: 'pixelated',
  },
}

/** Decorative background pattern with an editorial radial fade. */
export function PatternLayer({ pattern, fade = true, className }: { pattern: Pattern; fade?: boolean; className?: string }) {
  if (pattern === 'none') return null
  const mask = fade ? 'radial-gradient(ellipse 75% 65% at 50% 40%, #000 25%, transparent 100%)' : undefined
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{ ...layers[pattern], maskImage: mask, WebkitMaskImage: mask }}
    />
  )
}

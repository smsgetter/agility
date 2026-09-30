import { useRef, type PointerEvent } from 'react'
import { cn } from '../foundation/cn'
import { Card, type CardProps } from './card'

/** Card with a cursor-tracked light + border sheen (CSS vars, no re-render). */
export function SpotlightCard({ children, className, onPointerMove, ...props }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (el) {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    onPointerMove?.(e)
  }
  return (
    <Card ref={ref} onPointerMove={move} {...props} className={cn('group overflow-hidden', className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--mx) var(--my), var(--ag-c-soft), transparent 45%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1,
          background: 'radial-gradient(260px circle at var(--mx) var(--my), var(--ag-c), transparent 60%)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <div className="relative flex flex-col gap-3">{children as React.ReactNode}</div>
    </Card>
  )
}

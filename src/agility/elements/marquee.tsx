import type { ReactNode } from 'react'
import { cn } from '../foundation/cn'

export interface MarqueeProps {
  children: ReactNode
  /** seconds per loop */
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
  fade?: boolean
  className?: string
}

export function Marquee({ children, speed = 30, reverse, pauseOnHover = true, fade = true, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden [--gap:2.5rem]',
        fade && '[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]',
        className,
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1 || undefined}
          className={cn('ag-marquee flex shrink-0 items-center gap-[var(--gap)] pr-[var(--gap)]', pauseOnHover && 'group-hover:[animation-play-state:paused]')}
          style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

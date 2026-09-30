import type { HTMLAttributes } from 'react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariationProps {
  dot?: boolean
}

export function Badge({ dot, className, children, ...props }: BadgeProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <span {...v} {...rest} className={cn(pack.recipe.chip, 'inline-flex h-6 items-center gap-1.5 px-2.5 text-[11px] font-medium whitespace-nowrap', className)}>
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-[var(--ag-c)] opacity-60" />
          <span className="relative size-1.5 rounded-full bg-[var(--ag-c)]" />
        </span>
      )}
      {children}
    </span>
  )
}

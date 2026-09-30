import type { HTMLAttributes } from 'react'
import { cn } from '../foundation/cn'

export function Kbd({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        'inline-flex h-6 min-w-6 items-center justify-center rounded-[calc(var(--ag-r)*.45)] border border-b-2 border-[var(--ag-line)] bg-[var(--ag-field-bg)] px-1.5 font-mono text-[11px] text-[var(--ag-muted)]',
        className,
      )}
      {...props}
    />
  )
}

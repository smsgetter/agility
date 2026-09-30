import { cn } from '../foundation/cn'

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cn('ag-shimmer h-4 w-full rounded-[calc(var(--ag-r)*.6)] bg-[var(--ag-line)]', className)} />
}

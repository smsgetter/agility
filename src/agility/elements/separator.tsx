import type { ReactNode } from 'react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'

export function Separator({ label, vertical, className }: { label?: ReactNode; vertical?: boolean; className?: string }) {
  const { pack } = usePack()
  if (vertical) return <span role="separator" aria-orientation="vertical" className={cn('inline-block h-6 w-px self-center bg-[var(--ag-line)]', className)} />
  return (
    <div role="separator" className={cn('flex w-full items-center gap-3', className)}>
      <span className="h-px flex-1 bg-[var(--ag-line)]" />
      {label && <span className={pack.recipe.label}>{label}</span>}
      {label && <span className="h-px flex-1 bg-[var(--ag-line)]" />}
    </div>
  )
}

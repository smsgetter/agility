import type { ReactNode } from 'react'
import { Progress as ArkProgress } from '@ark-ui/react/progress'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface ProgressProps extends Omit<ArkProgress.RootProps, 'children'>, VariationProps {
  label?: ReactNode
}

export function Progress({ label, className, ...props }: ProgressProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkProgress.Root {...v} {...rest} className={cn('flex w-full flex-col gap-2', className)}>
      {label && (
        <div className="flex items-center justify-between">
          <ArkProgress.Label className={pack.recipe.label}>{label}</ArkProgress.Label>
          <ArkProgress.ValueText className="font-mono text-xs tabular-nums text-[var(--ag-muted)]" />
        </div>
      )}
      <ArkProgress.Track className={cn(pack.recipe.track, 'h-2 overflow-hidden')}>
        <ArkProgress.Range className={cn(pack.recipe.indicator, 'h-full transition-[width] duration-700 ease-[var(--ag-ease)]')} />
      </ArkProgress.Track>
    </ArkProgress.Root>
  )
}

export function ProgressRing({ className, ...props }: Omit<ArkProgress.RootProps, 'children'> & VariationProps) {
  const [v, rest] = splitVx(props)
  return (
    <ArkProgress.Root {...v} {...rest} className={cn('inline-grid place-items-center [--size:64px] [--thickness:6px]', className)}>
      <ArkProgress.Circle className="col-start-1 row-start-1">
        <ArkProgress.CircleTrack className="stroke-[var(--ag-line)]" />
        <ArkProgress.CircleRange className="stroke-[var(--ag-c)] transition-[stroke-dashoffset] duration-700 [stroke-linecap:round]" />
      </ArkProgress.Circle>
      <ArkProgress.ValueText className="col-start-1 row-start-1 font-mono text-xs tabular-nums" />
    </ArkProgress.Root>
  )
}

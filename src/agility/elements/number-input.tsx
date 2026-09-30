import type { ReactNode } from 'react'
import { NumberInput as ArkNumber } from '@ark-ui/react/number-input'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface NumberInputProps extends Omit<ArkNumber.RootProps, 'children'>, VariationProps {
  label?: ReactNode
}

const step = 'grid size-8 shrink-0 place-items-center rounded-[calc(var(--ag-r)-4px)] text-[var(--ag-muted)] transition-colors hover:bg-[var(--ag-c-soft)] hover:text-[var(--ag-ink)] disabled:opacity-40'

export function NumberInput({ label, className, ...props }: NumberInputProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkNumber.Root {...v} {...rest} className={cn('flex w-full flex-col gap-1.5', className)}>
      {label && <ArkNumber.Label className={pack.recipe.label}>{label}</ArkNumber.Label>}
      <ArkNumber.Control className={cn(pack.recipe.field, 'flex items-center gap-1 !px-1')}>
        <ArkNumber.DecrementTrigger className={step}>
          <Icon name="minus" />
        </ArkNumber.DecrementTrigger>
        <ArkNumber.Input className="h-full min-w-0 flex-1 bg-transparent text-center font-mono tabular-nums outline-none" />
        <ArkNumber.IncrementTrigger className={step}>
          <Icon name="plus" />
        </ArkNumber.IncrementTrigger>
      </ArkNumber.Control>
    </ArkNumber.Root>
  )
}

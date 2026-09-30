import type { ReactNode } from 'react'
import { PinInput as ArkPin } from '@ark-ui/react/pin-input'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface PinInputProps extends Omit<ArkPin.RootProps, 'children'>, VariationProps {
  label?: ReactNode
  length?: number
}

export function PinInput({ label, length = 4, className, ...props }: PinInputProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkPin.Root placeholder="·" {...v} {...rest} className={cn('flex flex-col gap-1.5', className)}>
      {label && <ArkPin.Label className={pack.recipe.label}>{label}</ArkPin.Label>}
      <ArkPin.Control className="flex gap-2">
        {Array.from({ length }, (_, i) => (
          <ArkPin.Input
            key={i}
            index={i}
            className={cn(pack.recipe.field, 'w-[var(--ag-h)] !px-0 text-center font-mono text-lg tabular-nums outline-none placeholder:text-[var(--ag-muted)]')}
          />
        ))}
      </ArkPin.Control>
      <ArkPin.HiddenInput />
    </ArkPin.Root>
  )
}

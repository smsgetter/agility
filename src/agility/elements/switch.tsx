import type { ReactNode } from 'react'
import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface SwitchProps extends Omit<ArkSwitch.RootProps, 'children'>, VariationProps {
  label?: ReactNode
}

export function Switch({ label, className, ...props }: SwitchProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkSwitch.Root {...v} {...rest} className={cn('inline-flex cursor-pointer items-center gap-3 select-none data-[disabled]:opacity-50', className)}>
      <ArkSwitch.Control
        className={cn(
          pack.recipe.track,
          'relative inline-flex h-6 w-11 shrink-0 items-center p-0.5 transition-colors duration-[var(--ag-dur)] ease-[var(--ag-ease)] data-[state=checked]:bg-[var(--ag-c)]',
        )}
      >
        <ArkSwitch.Thumb
          className={cn(pack.recipe.thumb, 'size-5 transition-transform duration-[var(--ag-dur)] ease-[var(--ag-ease)] data-[state=checked]:translate-x-5')}
        />
      </ArkSwitch.Control>
      {label && <ArkSwitch.Label className="text-[var(--ag-fs)]">{label}</ArkSwitch.Label>}
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
}

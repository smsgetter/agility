import type { ReactNode } from 'react'
import { RadioGroup as ArkRadio } from '@ark-ui/react/radio-group'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface RadioGroupProps extends Omit<ArkRadio.RootProps, 'children'>, VariationProps {
  label?: ReactNode
  items: { value: string; label: ReactNode; disabled?: boolean }[]
}

export function RadioGroup({ label, items, className, ...props }: RadioGroupProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkRadio.Root {...v} {...rest} className={cn('flex flex-col gap-2.5', className)}>
      {label && <ArkRadio.Label className={pack.recipe.label}>{label}</ArkRadio.Label>}
      {items.map((it) => (
        <ArkRadio.Item key={it.value} value={it.value} disabled={it.disabled} className="inline-flex cursor-pointer items-center gap-3 data-[disabled]:opacity-50">
          <ArkRadio.ItemControl
            className={cn(
              pack.recipe.track,
              'grid size-5 shrink-0 place-items-center rounded-full transition-colors duration-[var(--ag-dur)] data-[state=checked]:bg-[var(--ag-c)] after:size-2 after:rounded-[inherit] after:bg-[var(--ag-c-fg)] after:scale-0 after:transition-transform after:duration-[var(--ag-dur)] after:ease-[var(--ag-ease)] data-[state=checked]:after:scale-100',
            )}
          />
          <ArkRadio.ItemText className="text-[var(--ag-fs)]">{it.label}</ArkRadio.ItemText>
          <ArkRadio.ItemHiddenInput />
        </ArkRadio.Item>
      ))}
    </ArkRadio.Root>
  )
}

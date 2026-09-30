import { useMemo, type ReactNode } from 'react'
import { Select as ArkSelect, createListCollection } from '@ark-ui/react/select'
import { cn } from '../foundation/cn'
import { PackPortal, usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface SelectItem {
  label: string
  value: string
  icon?: IconName
  disabled?: boolean
}

export interface SelectProps extends Omit<ArkSelect.RootProps<SelectItem>, 'collection' | 'children'>, VariationProps {
  items: SelectItem[]
  label?: ReactNode
  placeholder?: string
}

export function Select({ items, label, placeholder = 'Select…', className, ...props }: SelectProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  const collection = useMemo(() => createListCollection({ items }), [items])
  return (
    <ArkSelect.Root collection={collection} positioning={{ sameWidth: true, gutter: 6 }} {...v} {...rest} className={cn('flex w-full flex-col gap-1.5', className)}>
      {label && <ArkSelect.Label className={pack.recipe.label}>{label}</ArkSelect.Label>}
      <ArkSelect.Control>
        <ArkSelect.Trigger className={cn(pack.recipe.field, 'flex w-full items-center justify-between gap-2 text-left outline-none')}>
          <ArkSelect.ValueText placeholder={placeholder} className="truncate data-[placeholder-shown]:text-[var(--ag-muted)]" />
          <ArkSelect.Indicator className="text-[var(--ag-muted)] transition-transform duration-[var(--ag-dur)] ease-[var(--ag-ease)] data-[state=open]:rotate-180">
            <Icon name="chevron-down" />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      <PackPortal>
        <ArkSelect.Positioner>
          <ArkSelect.Content className={cn(pack.recipe.surface, 'ag-pop flex flex-col gap-0.5 p-1.5 outline-none')}>
            {collection.items.map((item) => (
              <ArkSelect.Item
                key={item.value}
                item={item}
                className={cn(pack.recipe.item, 'flex cursor-pointer items-center gap-2 px-2.5 py-2 text-[var(--ag-fs)] outline-none data-[disabled]:opacity-40')}
              >
                {item.icon && <Icon name={item.icon} />}
                <ArkSelect.ItemText className="flex-1">{item.label}</ArkSelect.ItemText>
                <ArkSelect.ItemIndicator className="text-[var(--ag-c)]">
                  <Icon name="check" />
                </ArkSelect.ItemIndicator>
              </ArkSelect.Item>
            ))}
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </PackPortal>
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  )
}

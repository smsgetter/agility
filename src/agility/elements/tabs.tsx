import type { ReactNode } from 'react'
import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface TabItem {
  value: string
  label: ReactNode
  icon?: IconName
  content: ReactNode
}

export interface TabsProps extends Omit<ArkTabs.RootProps, 'children'>, VariationProps {
  items: TabItem[]
}

export function Tabs({ items, className, ...props }: TabsProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkTabs.Root defaultValue={items[0]?.value} {...v} {...rest} className={cn('flex w-full flex-col gap-4', className)}>
      <ArkTabs.List className={cn(pack.recipe.track, 'relative inline-flex w-fit max-w-full gap-1 overflow-x-auto rounded-[var(--ag-r)] p-1')}>
        {items.map((t) => (
          <ArkTabs.Trigger
            key={t.value}
            value={t.value}
            className="relative z-10 inline-flex h-[calc(var(--ag-h)-8px)] items-center gap-2 rounded-[calc(var(--ag-r)-4px)] px-3 text-[var(--ag-fs)] whitespace-nowrap text-[var(--ag-muted)] outline-none transition-colors duration-[var(--ag-dur)] hover:text-[var(--ag-ink)] focus-visible:ring-2 focus-visible:ring-[var(--ag-c)] data-[selected]:text-[var(--ag-c-fg)]"
          >
            {t.icon && <Icon name={t.icon} />}
            {t.label}
          </ArkTabs.Trigger>
        ))}
        <ArkTabs.Indicator
          className={cn(
            pack.recipe.indicator,
            'z-0 h-[var(--height)] w-[var(--width)] rounded-[calc(var(--ag-r)-4px)] transition-all duration-[var(--ag-dur)] ease-[var(--ag-ease)]',
          )}
        />
      </ArkTabs.List>
      {items.map((t) => (
        <ArkTabs.Content key={t.value} value={t.value} className="ag-fade outline-none">
          {t.content}
        </ArkTabs.Content>
      ))}
    </ArkTabs.Root>
  )
}

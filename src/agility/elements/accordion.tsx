import type { ReactNode } from 'react'
import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface AccordionItem {
  value: string
  title: ReactNode
  content: ReactNode
  icon?: IconName
}

export interface AccordionProps extends Omit<ArkAccordion.RootProps, 'children'>, VariationProps {
  items: AccordionItem[]
}

export function Accordion({ items, className, ...props }: AccordionProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkAccordion.Root collapsible defaultValue={items[0] ? [items[0].value] : []} {...v} {...rest} className={cn(pack.recipe.surface, 'flex w-full flex-col divide-y divide-[var(--ag-line)] overflow-hidden', className)}>
      {items.map((it) => (
        <ArkAccordion.Item key={it.value} value={it.value}>
          <ArkAccordion.ItemTrigger className="flex w-full items-center gap-3 px-5 py-4 text-left text-[var(--ag-fs)] font-medium outline-none transition-colors hover:bg-[var(--ag-c-soft)] focus-visible:bg-[var(--ag-c-soft)]">
            {it.icon && <Icon name={it.icon} className="text-[var(--ag-c)]" />}
            <span className="flex-1">{it.title}</span>
            <ArkAccordion.ItemIndicator className="text-[var(--ag-muted)] transition-transform duration-[var(--ag-dur)] ease-[var(--ag-ease)] data-[state=open]:rotate-180">
              <Icon name="chevron-down" />
            </ArkAccordion.ItemIndicator>
          </ArkAccordion.ItemTrigger>
          <ArkAccordion.ItemContent className="ag-collapse overflow-hidden text-sm text-[var(--ag-muted)]">
            <div className="px-5 pb-4">{it.content}</div>
          </ArkAccordion.ItemContent>
        </ArkAccordion.Item>
      ))}
    </ArkAccordion.Root>
  )
}

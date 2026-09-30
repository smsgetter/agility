import type { ReactNode } from 'react'
import { SegmentGroup as ArkSegment } from '@ark-ui/react/segment-group'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface SegmentGroupProps extends Omit<ArkSegment.RootProps, 'children'>, VariationProps {
  items: { value: string; label: ReactNode; icon?: IconName; disabled?: boolean }[]
}

export function SegmentGroup({ items, className, ...props }: SegmentGroupProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkSegment.Root {...v} {...rest} className={cn(pack.recipe.track, 'relative inline-flex w-fit max-w-full items-center gap-0.5 overflow-x-auto rounded-[var(--ag-r)] p-1', className)}>
      <ArkSegment.Indicator
        className={cn(
          pack.recipe.thumb,
          'h-[var(--height)] w-[var(--width)] rounded-[calc(var(--ag-r)-4px)] transition-all duration-[var(--ag-dur)] ease-[var(--ag-ease)]',
        )}
      />
      {items.map((it) => (
        <ArkSegment.Item
          key={it.value}
          value={it.value}
          disabled={it.disabled}
          className="relative z-10 inline-flex h-[calc(var(--ag-h)-10px)] cursor-pointer items-center gap-1.5 px-3 text-[var(--ag-fs)] whitespace-nowrap text-[var(--ag-muted)] transition-colors duration-[var(--ag-dur)] hover:text-[var(--ag-ink)] data-[disabled]:opacity-40 data-[state=checked]:text-[var(--ag-canvas)]"
        >
          {it.icon && <Icon name={it.icon} />}
          <ArkSegment.ItemText>{it.label}</ArkSegment.ItemText>
          <ArkSegment.ItemControl />
          <ArkSegment.ItemHiddenInput />
        </ArkSegment.Item>
      ))}
    </ArkSegment.Root>
  )
}

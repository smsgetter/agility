import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface ToggleGroupProps extends Omit<ArkToggleGroup.RootProps, 'children'>, VariationProps {
  items: { value: string; icon: IconName; label: string }[]
}

export function ToggleGroup({ items, className, ...props }: ToggleGroupProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkToggleGroup.Root {...v} {...rest} className={cn(pack.recipe.track, 'inline-flex w-fit gap-1 rounded-[var(--ag-r)] p-1', className)}>
      {items.map((it) => (
        <ArkToggleGroup.Item
          key={it.value}
          value={it.value}
          aria-label={it.label}
          title={it.label}
          className="inline-grid size-8 place-items-center rounded-[calc(var(--ag-r)-4px)] text-[var(--ag-muted)] outline-none transition-colors duration-[var(--ag-dur)] hover:text-[var(--ag-ink)] focus-visible:ring-2 focus-visible:ring-[var(--ag-c)] data-[state=on]:bg-[var(--ag-c)] data-[state=on]:text-[var(--ag-c-fg)]"
        >
          <Icon name={it.icon} />
        </ArkToggleGroup.Item>
      ))}
    </ArkToggleGroup.Root>
  )
}

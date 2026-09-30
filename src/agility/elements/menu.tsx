import type { ReactNode } from 'react'
import { Menu as ArkMenu } from '@ark-ui/react/menu'
import { cn } from '../foundation/cn'
import { PackPortal, usePack } from '../foundation/provider'
import { Icon, type IconName } from '../foundation/icon'
import { Kbd } from './kbd'

export type MenuEntry =
  | { value: string; label: ReactNode; icon?: IconName; shortcut?: string; danger?: boolean; disabled?: boolean }
  | 'separator'

export interface MenuProps extends Omit<ArkMenu.RootProps, 'children'> {
  trigger: ReactNode
  items: MenuEntry[]
}

export function Menu({ trigger, items, ...props }: MenuProps) {
  const { pack } = usePack()
  return (
    <ArkMenu.Root positioning={{ gutter: 8 }} {...props}>
      <ArkMenu.Trigger asChild>{trigger}</ArkMenu.Trigger>
      <PackPortal>
        <ArkMenu.Positioner>
          <ArkMenu.Content className={cn(pack.recipe.surface, 'ag-pop flex min-w-56 flex-col gap-0.5 p-1.5 outline-none')}>
            {items.map((it, i) =>
              it === 'separator' ? (
                <ArkMenu.Separator key={`sep-${i}`} className="my-1 h-px border-0 bg-[var(--ag-line)]" />
              ) : (
                <ArkMenu.Item
                  key={it.value}
                  value={it.value}
                  disabled={it.disabled}
                  className={cn(
                    pack.recipe.item,
                    'flex cursor-pointer items-center gap-2.5 px-2.5 py-2 text-[var(--ag-fs)] outline-none data-[disabled]:opacity-40',
                    it.danger && 'text-[oklch(0.72_0.2_20)]',
                  )}
                >
                  {it.icon && <Icon name={it.icon} />}
                  <span className="flex-1">{it.label}</span>
                  {it.shortcut && <Kbd>{it.shortcut}</Kbd>}
                </ArkMenu.Item>
              ),
            )}
          </ArkMenu.Content>
        </ArkMenu.Positioner>
      </PackPortal>
    </ArkMenu.Root>
  )
}

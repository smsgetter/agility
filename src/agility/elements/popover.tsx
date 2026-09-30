import type { ReactNode } from 'react'
import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { cn } from '../foundation/cn'
import { PackPortal, usePack } from '../foundation/provider'

export interface PopoverProps extends Omit<ArkPopover.RootProps, 'children'> {
  trigger: ReactNode
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}

export function Popover({ trigger, title, description, children, className, ...props }: PopoverProps) {
  const { pack } = usePack()
  return (
    <ArkPopover.Root positioning={{ gutter: 8 }} {...props}>
      <ArkPopover.Trigger asChild>{trigger}</ArkPopover.Trigger>
      <PackPortal>
        <ArkPopover.Positioner>
          <ArkPopover.Content className={cn(pack.recipe.surface, 'ag-pop w-72 p-4 outline-none', className)}>
            {title && <ArkPopover.Title className={cn(pack.recipe.heading, 'text-base')}>{title}</ArkPopover.Title>}
            {description && <ArkPopover.Description className="mt-1 text-sm text-[var(--ag-muted)]">{description}</ArkPopover.Description>}
            {children && <div className="mt-3">{children}</div>}
          </ArkPopover.Content>
        </ArkPopover.Positioner>
      </PackPortal>
    </ArkPopover.Root>
  )
}

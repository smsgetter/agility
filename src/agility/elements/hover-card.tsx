import type { ReactNode } from 'react'
import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'
import { cn } from '../foundation/cn'
import { PackPortal, usePack } from '../foundation/provider'

export interface HoverCardProps extends Omit<ArkHoverCard.RootProps, 'children'> {
  trigger: ReactNode
  children: ReactNode
  className?: string
}

export function HoverCard({ trigger, children, className, ...props }: HoverCardProps) {
  const { pack } = usePack()
  return (
    <ArkHoverCard.Root openDelay={150} closeDelay={100} positioning={{ gutter: 10 }} {...props}>
      <ArkHoverCard.Trigger asChild>{trigger}</ArkHoverCard.Trigger>
      <PackPortal>
        <ArkHoverCard.Positioner>
          <ArkHoverCard.Content className={cn(pack.recipe.surface, 'ag-pop w-72 p-4 outline-none', className)}>{children}</ArkHoverCard.Content>
        </ArkHoverCard.Positioner>
      </PackPortal>
    </ArkHoverCard.Root>
  )
}

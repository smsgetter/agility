import type { ReactNode } from 'react'
import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
import { cn } from '../foundation/cn'
import { PackPortal, usePack } from '../foundation/provider'

export interface TooltipProps extends Omit<ArkTooltip.RootProps, 'children'> {
  content: ReactNode
  children: ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  const { pack } = usePack()
  return (
    <ArkTooltip.Root openDelay={250} closeDelay={80} positioning={{ gutter: 8 }} {...props}>
      <ArkTooltip.Trigger asChild>{children}</ArkTooltip.Trigger>
      <PackPortal>
        <ArkTooltip.Positioner>
          <ArkTooltip.Content className={cn(pack.recipe.surface, 'ag-pop px-2.5 py-1.5 text-xs font-medium')}>{content}</ArkTooltip.Content>
        </ArkTooltip.Positioner>
      </PackPortal>
    </ArkTooltip.Root>
  )
}

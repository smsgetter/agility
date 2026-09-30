import type { ReactNode } from 'react'
import { Clipboard as ArkClipboard } from '@ark-ui/react/clipboard'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface ClipboardProps extends Omit<ArkClipboard.RootProps, 'children'>, VariationProps {
  label?: ReactNode
}

export function Clipboard({ label, className, ...props }: ClipboardProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkClipboard.Root {...v} {...rest} className={cn('flex w-full flex-col gap-1.5', className)}>
      {label && <ArkClipboard.Label className={pack.recipe.label}>{label}</ArkClipboard.Label>}
      <ArkClipboard.Control className={cn(pack.recipe.field, 'flex items-center gap-2 !pr-1')}>
        <ArkClipboard.Input className="h-full min-w-0 flex-1 bg-transparent font-mono text-[0.85em] outline-none" />
        <ArkClipboard.Trigger aria-label="Copy" className="grid size-8 shrink-0 place-items-center rounded-[calc(var(--ag-r)-4px)] transition-colors hover:bg-[var(--ag-c-soft)]">
          <ArkClipboard.Indicator copied={<Icon name="check" className="text-[var(--ag-c)]" />}>
            <Icon name="copy" />
          </ArkClipboard.Indicator>
        </ArkClipboard.Trigger>
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  )
}

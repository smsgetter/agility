import type { ReactNode } from 'react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { cn } from '../foundation/cn'
import { PackPortal, usePack } from '../foundation/provider'
import { Icon } from '../foundation/icon'

export interface DialogProps extends Omit<ArkDialog.RootProps, 'children'> {
  trigger: ReactNode
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export function Dialog({ trigger, title, description, children, footer, className, ...props }: DialogProps) {
  const { pack } = usePack()
  return (
    <ArkDialog.Root lazyMount unmountOnExit {...props}>
      <ArkDialog.Trigger asChild>{trigger}</ArkDialog.Trigger>
      <PackPortal>
        <ArkDialog.Backdrop className={cn(pack.recipe.overlay, 'ag-fade fixed inset-0 z-50')} />
        <ArkDialog.Positioner className="fixed inset-0 z-50 grid place-items-center p-4">
          <ArkDialog.Content className={cn(pack.recipe.surface, 'ag-pop relative w-full max-w-md p-6 outline-none', className)}>
            <ArkDialog.Title className={cn(pack.recipe.heading, 'pr-8 text-xl')}>{title}</ArkDialog.Title>
            {description && <ArkDialog.Description className="mt-1.5 text-sm text-[var(--ag-muted)]">{description}</ArkDialog.Description>}
            {children && <div className="mt-5">{children}</div>}
            {footer && <div className="mt-6 flex justify-end gap-2">{footer}</div>}
            <ArkDialog.CloseTrigger aria-label="Close" className="absolute top-4 right-4 text-[var(--ag-muted)] transition-colors hover:text-[var(--ag-ink)]">
              <Icon name="close" size="1.35em" />
            </ArkDialog.CloseTrigger>
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </PackPortal>
    </ArkDialog.Root>
  )
}

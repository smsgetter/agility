import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { vx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { Tone } from '../foundation/types'

const statuses: Record<string, { tone: Tone; icon: IconName }> = {
  info: { tone: 'ocean', icon: 'info' },
  success: { tone: 'lime', icon: 'check' },
  warning: { tone: 'ember', icon: 'warning' },
  danger: { tone: 'rose', icon: 'warning' },
}

export interface AlertProps extends Omit<HTMLMotionProps<'div'>, 'title' | 'children'> {
  status?: 'info' | 'success' | 'warning' | 'danger'
  tone?: Tone
  title: ReactNode
  children?: ReactNode
  onClose?: () => void
}

export function Alert({ status = 'info', tone, title, children, onClose, className, ...props }: AlertProps) {
  const { pack } = usePack()
  const s = statuses[status]
  return (
    <motion.div
      role="alert"
      {...vx({ tone: tone ?? s.tone })}
      initial={pack.motion.enter.initial}
      animate={pack.motion.enter.animate}
      transition={pack.motion.transition}
      {...props}
      className={cn(pack.recipe.surface, 'flex w-full items-start gap-3 p-4 [--ag-panel-bc:var(--ag-c-line)] [--ag-panel-bg:var(--ag-c-soft)]', className)}
    >
      <Icon name={s.icon} size="1.3em" className="mt-px text-[var(--ag-c)]" />
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        {children && <p className="mt-1 text-sm text-[var(--ag-muted)]">{children}</p>}
      </div>
      {onClose && (
        <button type="button" aria-label="Dismiss" onClick={onClose} className="text-[var(--ag-muted)] transition-colors hover:text-[var(--ag-ink)]">
          <Icon name="close" />
        </button>
      )}
    </motion.div>
  )
}

import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'>, VariationProps {
  children?: ReactNode
  icon?: IconName
  iconRight?: IconName
  loading?: boolean
}

export function Button({ children, icon, iconRight, loading, disabled, className, ...props }: ButtonProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props, { surface: 'solid' })
  return (
    <motion.button
      type="button"
      whileHover={pack.motion.hover}
      whileTap={pack.motion.tap}
      transition={pack.motion.transition}
      {...v}
      {...rest}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        pack.recipe.control,
        'inline-flex items-center justify-center gap-2 whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
    >
      {loading ? <span aria-hidden className="size-[1em] animate-spin rounded-full border-2 border-current border-r-transparent" /> : icon && <Icon name={icon} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </motion.button>
  )
}

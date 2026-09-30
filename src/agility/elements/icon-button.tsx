import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'>, VariationProps {
  icon: IconName
  label: string
}

export function IconButton({ icon, label, className, ...props }: IconButtonProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props, { surface: 'soft' })
  return (
    <motion.button
      type="button"
      aria-label={label}
      whileHover={pack.motion.hover}
      whileTap={pack.motion.tap}
      transition={pack.motion.transition}
      {...v}
      {...rest}
      className={cn(pack.recipe.control, 'inline-grid aspect-square w-[var(--ag-h)] !px-0 place-items-center', className)}
    >
      <Icon name={icon} size="1.25em" />
    </motion.button>
  )
}

import type { HTMLAttributes } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface CardProps extends HTMLMotionProps<'div'>, VariationProps {
  interactive?: boolean
}

export function Card({ interactive, className, ...props }: CardProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <motion.div
      whileHover={interactive ? pack.motion.hover : undefined}
      transition={pack.motion.transition}
      {...v}
      {...rest}
      className={cn(pack.recipe.surface, 'flex flex-col gap-4 p-6', interactive && 'cursor-pointer', className)}
    />
  )
}

export const CardHeader = ({ className, ...p }: HTMLAttributes<HTMLDivElement>) => <div className={cn('flex flex-col gap-1.5', className)} {...p} />

export function CardTitle({ className, ...p }: HTMLAttributes<HTMLHeadingElement>) {
  const { pack } = usePack()
  return <h3 className={cn(pack.recipe.heading, 'text-lg leading-tight', className)} {...p} />
}

export const CardDescription = ({ className, ...p }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-sm text-[var(--ag-muted)]', className)} {...p} />
)

export const CardFooter = ({ className, ...p }: HTMLAttributes<HTMLDivElement>) => <div className={cn('mt-auto flex items-center gap-2', className)} {...p} />

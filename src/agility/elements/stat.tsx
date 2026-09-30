import { useEffect, useRef, type ReactNode } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface StatProps extends VariationProps {
  label: ReactNode
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  delta?: number
  className?: string
}

export function Stat({ label, value, prefix = '', suffix = '', decimals = 0, delta, className, ...props }: StatProps) {
  const { pack } = usePack()
  const [v] = splitVx(props)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const mv = useMotionValue(0)
  const text = useTransform(mv, (n) => `${prefix}${n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, value, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [inView, value, mv])

  return (
    <div ref={ref} {...v} className={cn(pack.recipe.surface, 'flex flex-col gap-1 p-5', className)}>
      <span className={pack.recipe.label}>{label}</span>
      <motion.span className={cn(pack.recipe.heading, 'text-3xl tabular-nums')}>{text}</motion.span>
      {delta != null && (
        <span className={cn('font-mono text-xs font-medium', delta >= 0 ? 'text-[oklch(0.8_0.18_150)]' : 'text-[oklch(0.72_0.2_20)]')}>
          {delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}%
        </span>
      )}
    </div>
  )
}

import { useMemo, type ReactNode } from 'react'
import { motion, useReducedMotion, type Variant } from 'motion/react'
import { usePack } from './provider'
import type { MotionProfile } from './types'

export { steps, easings, springs, durations } from './easing'

const reduced = (m: MotionProfile): MotionProfile => ({
  ...m,
  transition: { duration: 0.01 },
  hover: {},
  tap: {},
  enter: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  stagger: 0,
})

/** Pack motion profile, automatically neutralised for prefers-reduced-motion. */
export function useMotionProfile(): MotionProfile {
  const { pack } = usePack()
  const reduce = useReducedMotion()
  return useMemo(() => (reduce ? reduced(pack.motion) : pack.motion), [pack.motion, reduce])
}

type Tag = 'div' | 'section' | 'span' | 'li' | 'p' | 'header' | 'h2'

interface RevealProps {
  as?: Tag
  delay?: number
  once?: boolean
  className?: string
  children?: ReactNode
}

/** Scroll-triggered enter using the pack's choreography. */
export function Reveal({ as = 'div', delay = 0, once = true, className, children }: RevealProps) {
  const m = useMotionProfile()
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      className={className}
      initial={m.enter.initial}
      whileInView={m.enter.animate}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ ...m.transition, delay }}
    >
      {children}
    </Comp>
  )
}

export function Stagger({ as = 'div', delay = 0, once = true, className, children }: RevealProps) {
  const m = useMotionProfile()
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: m.stagger, delayChildren: delay } } }}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ className, children }: { className?: string; children?: ReactNode }) {
  const m = useMotionProfile()
  const variants = {
    hidden: m.enter.initial as Variant,
    show: { ...(m.enter.animate as object), transition: m.transition } as Variant,
  }
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

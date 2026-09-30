import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { vx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'

export interface DockItem {
  icon: IconName
  label: string
  onClick?: () => void
}

/** macOS-style magnification dock. Pure motion values, no re-renders. */
export function Dock({ items, className }: { items: DockItem[]; className?: string }) {
  const { pack } = usePack()
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(pack.recipe.surface, 'mx-auto flex h-16 w-fit items-end gap-2.5 rounded-[calc(var(--ag-r)*1.6)] px-2.5 pb-2', className)}
    >
      {items.map((it) => (
        <DockButton key={it.label} mouseX={mouseX} {...it} />
      ))}
    </motion.div>
  )
}

function DockButton({ mouseX, icon, label, onClick }: DockItem & { mouseX: MotionValue<number> }) {
  const { pack } = usePack()
  const ref = useRef<HTMLButtonElement>(null)
  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect()
    return b ? x - b.x - b.width / 2 : Number.POSITIVE_INFINITY
  })
  const size = useSpring(useTransform(distance, [-140, 0, 140], [44, 68, 44]), { mass: 0.1, stiffness: 170, damping: 12 })
  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={label}
      onClick={onClick}
      style={{ width: size, height: size }}
      {...vx({ surface: 'soft' })}
      className={cn(pack.recipe.control, 'group !h-auto !px-0 grid shrink-0 place-items-center')}
    >
      <Icon name={icon} size="46%" />
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[var(--ag-ink)] px-2 py-1 text-[11px] whitespace-nowrap text-[var(--ag-canvas)] opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </motion.button>
  )
}

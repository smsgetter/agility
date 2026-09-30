import { useId, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface NavbarProps extends VariationProps {
  items: { value: string; label: ReactNode }[]
  brand?: ReactNode
  actions?: ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function Navbar({ items, brand, actions, value, defaultValue, onValueChange, className, ...props }: NavbarProps) {
  const { pack } = usePack()
  const [v] = splitVx(props)
  const id = useId()
  const [inner, setInner] = useState(defaultValue ?? items[0]?.value)
  const active = value ?? inner
  return (
    <nav {...v} className={cn(pack.recipe.surface, 'inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-[calc(var(--ag-r)*2)] p-1.5', className)}>
      {brand && <span className="px-3 font-semibold whitespace-nowrap">{brand}</span>}
      {items.map((it) => {
        const on = active === it.value
        return (
          <button
            key={it.value}
            type="button"
            aria-current={on ? 'page' : undefined}
            onClick={() => {
              setInner(it.value)
              onValueChange?.(it.value)
            }}
            className={cn('relative px-3.5 py-1.5 text-[var(--ag-fs)] whitespace-nowrap outline-none transition-colors', on ? 'text-[var(--ag-c-fg)]' : 'text-[var(--ag-muted)] hover:text-[var(--ag-ink)]')}
          >
            {on && <motion.span layoutId={`${id}-nav`} transition={pack.motion.transition} className={cn(pack.recipe.indicator, 'absolute inset-0 rounded-[calc(var(--ag-r)*1.4)]')} />}
            <span className="relative z-10">{it.label}</span>
          </button>
        )
      })}
      {actions && <div className="ml-auto flex items-center gap-1 pl-2">{actions}</div>}
    </nav>
  )
}

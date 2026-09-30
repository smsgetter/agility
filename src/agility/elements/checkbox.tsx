import type { ReactNode } from 'react'
import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'
import { motion } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface CheckboxProps extends Omit<ArkCheckbox.RootProps, 'children'>, VariationProps {
  label?: ReactNode
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkCheckbox.Root {...v} {...rest} className={cn('inline-flex cursor-pointer items-center gap-3 select-none data-[disabled]:opacity-50', className)}>
      <ArkCheckbox.Control
        className={cn(
          pack.recipe.track,
          'grid size-5 shrink-0 place-items-center rounded-[calc(var(--ag-r)*.4)] transition-colors duration-[var(--ag-dur)] data-[state=checked]:bg-[var(--ag-c)] data-[state=checked]:text-[var(--ag-c-fg)] data-[state=indeterminate]:bg-[var(--ag-c)] data-[state=indeterminate]:text-[var(--ag-c-fg)]',
        )}
      >
        <ArkCheckbox.Indicator>
          <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M3.5 8.5l3 3 6-7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={pack.motion.transition} />
          </svg>
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator indeterminate>
          <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
            <path d="M4 8h8" />
          </svg>
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {label && <ArkCheckbox.Label className="text-[var(--ag-fs)]">{label}</ArkCheckbox.Label>}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  )
}

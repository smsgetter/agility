import type { ComponentProps, ReactNode } from 'react'
import { Field } from '@ark-ui/react/field'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon, type IconName } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'>, VariationProps {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  icon?: IconName
  trailing?: ReactNode
}

export function Input({ label, hint, error, icon, trailing, className, ...props }: InputProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <Field.Root invalid={!!error} {...v} className={cn('flex w-full flex-col gap-1.5', className)}>
      {label && <Field.Label className={pack.recipe.label}>{label}</Field.Label>}
      <div className={cn(pack.recipe.field, 'flex items-center gap-2')}>
        {icon && <Icon name={icon} className="text-[var(--ag-muted)]" />}
        <Field.Input {...rest} className="h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-[var(--ag-muted)]" />
        {trailing}
      </div>
      {error ? (
        <Field.ErrorText className="text-xs text-[oklch(0.72_0.2_20)]">{error}</Field.ErrorText>
      ) : (
        hint && <Field.HelperText className="text-xs text-[var(--ag-muted)]">{hint}</Field.HelperText>
      )}
    </Field.Root>
  )
}

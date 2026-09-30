import type { ComponentProps, ReactNode } from 'react'
import { Field } from '@ark-ui/react/field'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface TextareaProps extends ComponentProps<'textarea'>, VariationProps {
  label?: ReactNode
  hint?: ReactNode
}

export function Textarea({ label, hint, className, ...props }: TextareaProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <Field.Root {...v} className={cn('flex w-full flex-col gap-1.5', className)}>
      {label && <Field.Label className={pack.recipe.label}>{label}</Field.Label>}
      <Field.Textarea
        autoresize
        rows={3}
        {...rest}
        className={cn(pack.recipe.field, '!h-auto min-h-24 resize-none py-2.5 outline-none placeholder:text-[var(--ag-muted)]')}
      />
      {hint && <Field.HelperText className="text-xs text-[var(--ag-muted)]">{hint}</Field.HelperText>}
    </Field.Root>
  )
}

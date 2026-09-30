import type { ReactNode } from 'react'
import { TagsInput as ArkTags } from '@ark-ui/react/tags-input'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface TagsInputProps extends Omit<ArkTags.RootProps, 'children'>, VariationProps {
  label?: ReactNode
  placeholder?: string
}

export function TagsInput({ label, placeholder = 'Add tag…', className, ...props }: TagsInputProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkTags.Root {...v} {...rest} className={cn('flex w-full flex-col gap-1.5', className)}>
      <ArkTags.Context>
        {(api) => (
          <>
            {label && <ArkTags.Label className={pack.recipe.label}>{label}</ArkTags.Label>}
            <ArkTags.Control className={cn(pack.recipe.field, 'flex !h-auto min-h-[var(--ag-h)] flex-wrap items-center gap-1.5 py-1.5')}>
              {api.value.map((value, index) => (
                <ArkTags.Item key={`${value}-${index}`} index={index} value={value}>
                  <ArkTags.ItemPreview className={cn(pack.recipe.chip, 'inline-flex h-6 items-center gap-1 pr-1 pl-2.5 text-xs')}>
                    <ArkTags.ItemText>{value}</ArkTags.ItemText>
                    <ArkTags.ItemDeleteTrigger aria-label={`Remove ${value}`} className="grid size-4 place-items-center opacity-60 transition-opacity hover:opacity-100">
                      <Icon name="close" size={13} />
                    </ArkTags.ItemDeleteTrigger>
                  </ArkTags.ItemPreview>
                  <ArkTags.ItemInput className="w-20 bg-transparent text-xs outline-none" />
                </ArkTags.Item>
              ))}
              <ArkTags.Input placeholder={placeholder} className="min-w-20 flex-1 bg-transparent outline-none placeholder:text-[var(--ag-muted)]" />
            </ArkTags.Control>
          </>
        )}
      </ArkTags.Context>
      <ArkTags.HiddenInput />
    </ArkTags.Root>
  )
}

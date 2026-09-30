import type { ReactNode } from 'react'
import { Slider as ArkSlider } from '@ark-ui/react/slider'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

export interface SliderProps extends Omit<ArkSlider.RootProps, 'children'>, VariationProps {
  label?: ReactNode
  showValue?: boolean
}

export function Slider({ label, showValue, className, ...props }: SliderProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  const thumbs = rest.value ?? rest.defaultValue ?? [0]
  return (
    <ArkSlider.Root {...v} {...rest} className={cn('flex w-full flex-col gap-2', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <ArkSlider.Label className={pack.recipe.label}>{label}</ArkSlider.Label>}
          {showValue && <ArkSlider.ValueText className="font-mono text-xs tabular-nums text-[var(--ag-muted)]" />}
        </div>
      )}
      <ArkSlider.Control className="relative flex h-5 items-center">
        <ArkSlider.Track className={cn(pack.recipe.track, 'h-1.5 w-full overflow-hidden')}>
          <ArkSlider.Range className={cn(pack.recipe.indicator, 'h-full')} />
        </ArkSlider.Track>
        {thumbs.map((_, i) => (
          <ArkSlider.Thumb
            key={i}
            index={i}
            className={cn(
              pack.recipe.thumb,
              'size-5 cursor-grab outline-none ring-[var(--ag-c-soft)] transition-[box-shadow,scale] duration-[var(--ag-dur)] hover:scale-110 focus-visible:ring-4 data-[dragging]:scale-110 data-[dragging]:cursor-grabbing',
            )}
          >
            <ArkSlider.HiddenInput />
          </ArkSlider.Thumb>
        ))}
      </ArkSlider.Control>
    </ArkSlider.Root>
  )
}

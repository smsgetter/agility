import type { ReactNode } from 'react'
import { RatingGroup as ArkRating } from '@ark-ui/react/rating-group'
import { motion } from 'motion/react'
import { cn } from '../foundation/cn'
import { usePack } from '../foundation/provider'
import { splitVx } from '../foundation/variants'
import { Icon } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export interface RatingProps extends Omit<ArkRating.RootProps, 'children'>, VariationProps {
  label?: ReactNode
}

export function Rating({ label, className, ...props }: RatingProps) {
  const { pack } = usePack()
  const [v, rest] = splitVx(props)
  return (
    <ArkRating.Root count={5} {...v} {...rest} className={cn('flex flex-col gap-1.5', className)}>
      {label && <ArkRating.Label className={pack.recipe.label}>{label}</ArkRating.Label>}
      <ArkRating.Control className="flex gap-1">
        <ArkRating.Context>
          {({ items }) =>
            items.map((i) => (
              <ArkRating.Item key={i} index={i} className="cursor-pointer outline-none">
                <ArkRating.ItemContext>
                  {({ highlighted }) => (
                    <motion.span
                      animate={{ scale: highlighted ? 1 : 0.86 }}
                      transition={pack.motion.transition}
                      className={cn('grid text-2xl transition-colors', highlighted ? 'text-[var(--ag-c)]' : 'text-[var(--ag-muted)] opacity-35')}
                    >
                      <Icon name="star" style={pack.iconStyle === 'pixel' ? 'pixel' : 'bold'} />
                    </motion.span>
                  )}
                </ArkRating.ItemContext>
              </ArkRating.Item>
            ))
          }
        </ArkRating.Context>
      </ArkRating.Control>
      <ArkRating.HiddenInput />
    </ArkRating.Root>
  )
}

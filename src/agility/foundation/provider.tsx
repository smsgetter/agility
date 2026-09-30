import { createContext, useContext, useMemo, type HTMLAttributes, type ReactNode } from 'react'
import { Portal } from '@ark-ui/react/portal'
import { basePack } from './base-pack'
import { cn } from './cn'
import { mergeVariation, vx } from './variants'
import type { Pack, VariationProps } from './types'

interface AgilityContext {
  pack: Pack
  variation: VariationProps
}

const Ctx = createContext<AgilityContext>({ pack: basePack, variation: {} })

export const usePack = () => useContext(Ctx)

export interface AgilityProviderProps extends VariationProps, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  pack?: Pack
  children: ReactNode
}

/**
 * Scopes a pack + global variation to a subtree. Everything is CSS-variable
 * driven, so nested providers (e.g. a Liquid card inside a Matte page) just work.
 */
export function AgilityProvider({ pack = basePack, tone, border, radius, size, surface, className, children, ...rest }: AgilityProviderProps) {
  const variation = useMemo(
    () => mergeVariation(pack.defaults, { tone, border, radius, size, surface }),
    [pack, tone, border, radius, size, surface],
  )
  const value = useMemo(() => ({ pack, variation }), [pack, variation])
  const { surface: _s, ...rootVariation } = variation
  return (
    <Ctx.Provider value={value}>
      <div {...rest} data-pack={pack.id} {...vx(rootVariation)} className={cn('ag-root', pack.recipe.root, className)}>
        {children}
      </div>
    </Ctx.Provider>
  )
}

/** Portal that re-applies the pack scope, so overlays keep their tokens. */
export function PackPortal({ children }: { children: ReactNode }) {
  const { pack, variation } = usePack()
  const { surface: _s, ...rootVariation } = variation
  return (
    <Portal>
      <div data-pack={pack.id} {...vx(rootVariation)} className={cn('ag-root ag-portal', pack.recipe.root)}>
        {children}
      </div>
    </Portal>
  )
}

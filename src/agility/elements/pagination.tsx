import { Pagination as ArkPagination } from '@ark-ui/react/pagination'
import { cn } from '../foundation/cn'
import { splitVx } from '../foundation/variants'
import { Icon } from '../foundation/icon'
import type { VariationProps } from '../foundation/types'

export type PaginationProps = Omit<ArkPagination.RootProps, 'children'> & VariationProps

const btn =
  'inline-grid h-8 min-w-8 place-items-center rounded-[calc(var(--ag-r)*.7)] px-2 font-mono text-sm tabular-nums outline-none transition-colors duration-[var(--ag-dur)] hover:bg-[var(--ag-c-soft)] focus-visible:ring-2 focus-visible:ring-[var(--ag-c)] disabled:pointer-events-none disabled:opacity-35'

export function Pagination({ className, ...props }: PaginationProps) {
  const [v, rest] = splitVx(props)
  return (
    <ArkPagination.Root siblingCount={1} {...v} {...rest} className={cn('flex items-center gap-1', className)}>
      <ArkPagination.PrevTrigger className={btn} aria-label="Previous">
        <Icon name="chevron-left" />
      </ArkPagination.PrevTrigger>
      <ArkPagination.Context>
        {(api) =>
          api.pages.map((page, i) =>
            page.type === 'page' ? (
              <ArkPagination.Item key={i} {...page} className={cn(btn, 'data-[selected]:bg-[var(--ag-c)] data-[selected]:text-[var(--ag-c-fg)]')}>
                {page.value}
              </ArkPagination.Item>
            ) : (
              <ArkPagination.Ellipsis key={i} index={i} className="px-1 text-[var(--ag-muted)]">
                …
              </ArkPagination.Ellipsis>
            ),
          )
        }
      </ArkPagination.Context>
      <ArkPagination.NextTrigger className={btn} aria-label="Next">
        <Icon name="chevron-right" />
      </ArkPagination.NextTrigger>
    </ArkPagination.Root>
  )
}

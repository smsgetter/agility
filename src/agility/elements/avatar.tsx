import type { ReactNode } from 'react'
import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import { cn } from '../foundation/cn'
import { splitVx } from '../foundation/variants'
import type { VariationProps } from '../foundation/types'

const statusColor = { online: 'bg-[oklch(0.8_0.18_150)]', busy: 'bg-[oklch(0.68_0.21_12)]', away: 'bg-[oklch(0.8_0.16_80)]' }

export interface AvatarProps extends Omit<ArkAvatar.RootProps, 'children'>, VariationProps {
  name: string
  src?: string
  status?: keyof typeof statusColor
}

export function Avatar({ name, src, status, className, ...props }: AvatarProps) {
  const [v, rest] = splitVx(props)
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <ArkAvatar.Root {...v} {...rest} className={cn('relative inline-grid size-10 shrink-0 place-items-center', className)}>
      <span className="absolute inset-0 overflow-hidden rounded-[calc(var(--ag-r)*4)] bg-[var(--ag-c-soft)] ring-2 ring-[var(--ag-canvas)]">
        <ArkAvatar.Fallback className="grid size-full place-items-center text-xs font-semibold text-[var(--ag-c-ink)]">{initials}</ArkAvatar.Fallback>
        {src && <ArkAvatar.Image src={src} alt={name} className="size-full object-cover" />}
      </span>
      {status && <span aria-label={status} className={cn('absolute -right-0.5 -bottom-0.5 size-3 rounded-full ring-2 ring-[var(--ag-canvas)]', statusColor[status])} />}
    </ArkAvatar.Root>
  )
}

export function AvatarGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('flex -space-x-2.5', className)}>{children}</div>
}

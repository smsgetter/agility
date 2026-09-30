import type { Pack, PackId } from '../foundation/types'
import { liquid } from './liquid'
import { matte } from './matte'
import { bit8 } from './bit8'
import { noise } from './noise'
import { abstract } from './abstract'
import { typical } from './typical'

export { liquid, matte, bit8, noise, abstract, typical }

export const packs: Record<PackId, Pack> = { liquid, matte, bit8, noise, abstract, typical }
export const packList: Pack[] = [liquid, matte, bit8, noise, abstract, typical]

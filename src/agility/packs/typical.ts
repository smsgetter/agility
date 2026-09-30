import type { Pack } from '../foundation/types'
import { basePack } from '../foundation/base-pack'

/** The honest baseline. Same contract, zero gimmicks. */
export const typical: Pack = {
  ...basePack,
  id: 'typical',
  name: 'Typical',
}

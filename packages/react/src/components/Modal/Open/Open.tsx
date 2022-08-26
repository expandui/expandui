import { forwardRef } from 'react'
import Button from '../../Button'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  modalId: string
}

export type ModalOpenProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const ModalOpen = forwardRef(
  <C extends React.ElementType = typeof Button>(
    { as, modalId, ...rest }: ModalOpenProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || Button

    return <Component {...rest} ref={ref} aria-controls={modalId} />
  }
)

ModalOpen.displayName = 'ModalOpen'

export default ModalOpen

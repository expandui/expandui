import { forwardRef } from 'react'
import Button from '../../Button'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

export type ModalCloseProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Record<string, unknown>>

export const ModalClose = forwardRef(
  <C extends React.ElementType = typeof Button>(
    { as, ...rest }: ModalCloseProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || Button

    return <Component {...rest} ref={ref} data-modal-close />
  }
)

ModalClose.displayName = 'ModalClose'

export default ModalClose

import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  className?: string
}

export type ModalContentProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const ModalContent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, ...rest }: ModalContentProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'eui-modal-content',
          className ? className : ''
        )}
      />
    )
  }
)

ModalContent.displayName = 'ModalContent'

export default ModalContent

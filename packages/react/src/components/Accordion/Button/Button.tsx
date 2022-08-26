import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import Button from '../../Button'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  className?: string
}

export type AccordionButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const AccordionButton = forwardRef(
  <C extends React.ElementType = typeof Button>(
    { as, className, ...rest }: AccordionButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || Button

    return (
      <Component
        type="button"
        {...rest}
        ref={ref}
        className={createClassString('eui-accordion__button', className)}
      />
    )
  }
)

AccordionButton.displayName = 'AccordionButton'

export default AccordionButton

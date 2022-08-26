import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  className?: string
}

export type AccordionToggleProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const AccordionToggle = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, className, ...rest }: AccordionToggleProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button'

    return (
      <Component
        type="button"
        {...rest}
        ref={ref}
        className={createClassString(
          'eui-accordion__button',
          className ? className : ''
        )}
      />
    )
  }
)

AccordionToggle.displayName = 'AccordionButton'

export default AccordionToggle

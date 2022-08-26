import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../../types'

interface Props {
  children?: React.ReactNode
  className?: string
}

type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

const ButtonGroup = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, className, ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    return (
      <Component
        {...rest}
        className={createClassString(['eui-button-group', className])}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup

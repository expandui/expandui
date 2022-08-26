import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import type {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from '../../../types'

interface Props {
  children?: React.ReactNode
  className?: string
}

type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

const Button = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, children, className, ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button'

    return (
      <Component
        {...rest}
        className={createClassString('eui-button', className)}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button

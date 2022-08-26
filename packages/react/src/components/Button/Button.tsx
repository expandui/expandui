import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import type {
  ColorVariant,
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from 'types'

interface Props {
  children?: React.ReactNode
  className?: string
  variant?: ColorVariant
}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

const Button = forwardRef(
  <C extends React.ElementType = 'button'>(
    { as, children, className, variant = 'primary', ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button'

    return (
      <Component
        {...rest}
        className={createClassString('eui-button', `v-${variant}`, className)}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button

import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import Button from '../../Button'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  className?: string
}

export type TabsToggleProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const TabsToggle = forwardRef(
  <C extends React.ElementType = typeof Button>(
    { as, className, ...rest }: TabsToggleProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || Button

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString('eui-tabs__toggle', className)}
      />
    )
  }
)

TabsToggle.displayName = 'TabsToggle'

export default TabsToggle

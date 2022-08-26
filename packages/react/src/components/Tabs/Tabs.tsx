import { forwardRef, useEffect } from 'react'
import { tabs } from '@expandui/core'
import { createClassString } from '@shared/utils'
import useForwardedRef from 'hooks/useForwardedRef'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  className?: string
}

export type TabsProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const Tabs = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, ...rest }: TabsProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    const safeRef = useForwardedRef(ref)

    useEffect(() => {
      const containerEl = safeRef?.current
      if (!containerEl || !tabs) return

      tabs.on(containerEl)

      return () => {
        tabs.off(containerEl)
      }
    }, [])

    return (
      <Component
        {...rest}
        ref={safeRef}
        className={createClassString('eui-tabs', className)}
      />
    )
  }
)

Tabs.displayName = 'Tabs'

export default Tabs

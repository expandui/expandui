import { forwardRef, useEffect } from 'react'
import { accordion } from '@expandui/core'
import { createClassString } from '@shared/utils'
import useForwardedRef from 'hooks/useForwardedRef'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  className?: string
  multiselect?: boolean
}

export type AccordionProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const Accordion = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, className, multiselect, ...rest }: AccordionProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    const safeRef = useForwardedRef(ref)

    useEffect(() => {
      const containerEl = safeRef?.current
      if (!containerEl || !accordion) return

      accordion.on(containerEl)

      return () => {
        accordion.off(containerEl)
      }
    }, [])

    return (
      <Component
        {...rest}
        ref={safeRef}
        className={createClassString(
          'eui-accordion',
          multiselect ? 'multiselect' : '',
          className ? className : ''
        )}
      />
    )
  }
)

Accordion.displayName = 'Accordion'

export default Accordion

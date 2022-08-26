import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import Content from '../Content'
import Toggle from '../Toggle'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  children?: React.ReactNode
  className?: string
  expanded?: boolean
  toggle?: string
}

export type AccordionItemProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const AccordionItem = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      as,
      children,
      className,
      expanded,
      toggle,
      ...rest
    }: AccordionItemProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    return (
      <Component
        {...rest}
        ref={ref}
        className={createClassString(
          'eui-accordion__item',
          expanded ? 'expanded' : '',
          className ? className : ''
        )}
      >
        {toggle ? (
          <>
            <Toggle>{toggle}</Toggle>
            <Content>{children}</Content>
          </>
        ) : (
          <>{children}</>
        )}
      </Component>
    )
  }
)

AccordionItem.displayName = 'AccordionItem'

export default AccordionItem

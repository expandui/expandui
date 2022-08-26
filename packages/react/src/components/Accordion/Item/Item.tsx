import { forwardRef } from 'react'
import { createClassString } from '@shared/utils'

import Button from '../Button'
import Content from '../Content'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  children?: React.ReactNode
  className?: string
  expanded?: boolean
  heading?: string
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
      heading,
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
          className
        )}
      >
        {heading ? (
          <>
            <Button>{heading}</Button>
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

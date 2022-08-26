import { forwardRef, useEffect } from 'react'
import { modal } from '@expandui/core'
import { createClassString } from '@shared/utils'
import useForwardedRef from 'hooks/useForwardedRef'

import Content from './Content'
import Heading from './Heading'

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'types'

interface Props {
  children?: React.ReactNode
  className?: string
  forceAction?: boolean
  heading?: string
  id: string
}

export type ModalProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props>

export const Modal = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, className, forceAction, heading, ...rest }: ModalProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    const safeRef = useForwardedRef(ref)

    useEffect(() => {
      const containerEl = safeRef?.current
      if (!containerEl || !modal) return

      modal.on(containerEl)

      return () => {
        modal.off(containerEl)
      }
    }, [])

    return (
      <Component
        {...rest}
        ref={safeRef}
        className={createClassString(
          'eui-modal',
          forceAction ? 'force-action' : '',
          className
        )}
      >
        {heading ? (
          <>
            <Heading>{heading}</Heading>
            <Content>{children}</Content>
          </>
        ) : (
          <>{children}</>
        )}
      </Component>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal

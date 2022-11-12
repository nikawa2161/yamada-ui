import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { useModal } from './'

export type ModalHeaderProps = HTMLUIProps<'header'>

export const ModalHeader = forwardRef<ModalHeaderProps, 'header'>(({ className, ...rest }, ref) => {
  const { styles } = useModal()

  const css: CSSUIObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...styles.header,
  }

  return <ui.header ref={ref} className={cx('ui-modal-header', className)} __css={css} {...rest} />
})

import classNames from 'classnames'
import { css } from 'aphrodite/no-important'
import tx from '../../../../theme/styles'
import sx from '../styles'

function mapProps (props) {
  const { mainContentContainerProps } = props
  return {
    ...props,
    mainContentContainerProps: {
      ...mainContentContainerProps,
      className: classNames(
        css(tx.flexGrow1, tx.flexShrink0, sx.mainContentContainer),
        mainContentContainerProps.className
      )
    }
  }
}

export default mapProps

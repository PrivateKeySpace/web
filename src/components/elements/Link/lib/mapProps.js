import classNames from 'classnames'
import { css } from 'aphrodite/no-important'
import tx from '../../../../theme/styles'
import sx from '../styles'

function mapProps (props) {
  const { className } = props

  return {
    ...props,
    className: classNames(
      css(tx.textTransformUppercase, tx.fontWeight400, tx.fontSize3, sx.link),
      className
    )
  }
}

export default mapProps

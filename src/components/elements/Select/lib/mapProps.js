import classNames from 'classnames'
import { css } from 'aphrodite/no-important'
import tx from '../../../../theme/styles'
import sx from '../styles'

function mapProps (props) {
  const { className } = props

  return {
    ...props,
    className: classNames(
      css(tx.p1, sx.select),
      className
    )
  }
}

export default mapProps

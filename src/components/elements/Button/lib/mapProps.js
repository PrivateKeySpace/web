import classNames from 'classnames'
import { css } from 'aphrodite/no-important'
import tx from '../../../../theme/styles'
import { linkSx, outlineSx, defaultSx } from '../styles'

function getSx (link, outline) {
  if (link) {
    return linkSx
  } else if (outline) {
    return outlineSx
  } else {
    return defaultSx
  }
}

function mapProps (props) {
  const { link, outline, variant, className, ...rest } = props
  const sx = getSx(link, outline)

  return {
    ...rest,
    className: classNames(
      css(tx.px4, tx.textTransformUppercase, tx.fontWeight500, tx.inlineFlex, tx.alignItemsCenter, tx.justifyContentCenter, sx.button, variant && sx[variant]),
      className
    )
  }
}

export default mapProps

import React from 'react'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { defaultSx, outlineSx, linkSx } from './styles'

function getSx (outline, link) {
  if (link) {
    return linkSx
  } else if (outline) {
    return outlineSx
  } else {
    return defaultSx
  }
}

function Button (props) {
  const { variant, children, outline, link, ...nativeProps } = props
  const sx = getSx(outline, link)

  return (
    <button
      {...nativeProps}
      className={css(tx.px4, tx.textTransformUppercase, tx.fontWeight500, tx.inlineFlex, tx.alignItemsCenter, tx.justifyContentCenter, sx.button, variant && sx[variant])}
    >
      {children}
    </button>
  )
}

export default Button

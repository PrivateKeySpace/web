import React from 'react'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import sx from './styles'
import Button from '../Button'

function Alert (props) {
  const { text, variant } = props

  return (
    <div className={css(tx.width100, tx.fontWeight500, tx.mb1, tx.px3, tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, sx.alert, variant && sx[variant])}>
      <div className={css(sx.text)}>{text}</div>
      <div className={css(sx.controls)}>
        <Button>Test</Button>
      </div>
    </div>
  )
}

export default Alert

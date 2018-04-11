import React from 'react'
import { compose, setDisplayName, setPropTypes, defaultProps, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import { propTypes, defaultPropsSpec } from './lib'
import tx from '../../../theme/styles'
import sx from './styles'

const displayName = 'components/elements/Alert'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  defaultProps(defaultPropsSpec),
  pure
)

function Alert (props) {
  const { text, variant, controls } = props

  return (
    <div className={css(tx.width100, tx.fontWeight500, tx.mb1, tx.px3, tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, sx.alert, variant && sx[variant])}>
      <div className={css(sx.text)}>{text}</div>
      <div className={css(tx.flex, sx.controls)}>
        {controls.map(control =>
          <div key={control.key} className={css(tx.px1)}>
            {control}
          </div>
        )}
      </div>
    </div>
  )
}

export default enhance(Alert)

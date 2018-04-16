import React from 'react'
import { compose, setDisplayName, setPropTypes, mapProps, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import sx from './styles'
import { propTypes, mapProps as propsMapper } from './lib'

const displayName = 'components/elements/Select'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  mapProps(propsMapper),
  pure
)

function Select (props) {
  return (
    <div className={css(tx.p0, tx.displayInlineBlock, sx.selectWrap)}>
      <select {...props} />
      <div className={css(sx.arrow)}>
        <span className='lnr lnr-chevron-down' />
      </div>
    </div>
  )
}

export default enhance(Select)

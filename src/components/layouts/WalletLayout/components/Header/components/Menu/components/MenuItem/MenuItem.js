import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import classNames from 'classnames'
import tx from '../../../../../../../../../theme/styles'
import sx from './styles'

const displayName = 'components/layouts/WalletLayout/components/Header/components/Menu/components/MenuItem'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function MenuItem (props) {
  const { icon, children, onClick } = props
  return (
    <div
      className={css(tx.flex, tx.alignItemsCenter, tx.px3, tx.ml1, tx.width100, tx.cursorPointer, sx.menuItem)}
      onClick={onClick}
    >
      {
        icon &&
        <span className={classNames(`lnr lnr-${icon}`, css(tx.fontSizes1, tx.mr3))} />
      }
      <div className={css(tx.textTransformUppercase, sx.menuItemText)}>{children}</div>
    </div>
  )
}

export default enhance(MenuItem)

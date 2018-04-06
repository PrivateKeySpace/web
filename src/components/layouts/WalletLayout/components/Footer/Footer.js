import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../theme/styles'
import sx from './styles'

const displayName = 'components/layouts/WalletLayout/components/Footer'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function Footer () {
  return (
    <footer className={css(tx.px5)}>
      <div className={css(tx.width100, tx.py4, tx.px1, tx.textTransformUppercase, sx.footer)}>
        2018 &copy; PKS Wallet. All rights reserved.
      </div>
    </footer>
  )
}

export default enhance(Footer)

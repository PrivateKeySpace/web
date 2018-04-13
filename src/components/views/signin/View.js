import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import { Footer } from '../../layouts/WalletLayout/components'
import startLogo from '../../../assets/start.png'
import tx from '../../../theme/styles'
import sx from './styles'
import { mapDispatch, handlers } from './lib'

const displayName = 'components/views/signin/View'

const enhance = compose(
  setDisplayName(displayName),
  connect(undefined, mapDispatch),
  withHandlers(handlers),
  pure
)

function View (props) {
  const { handleSignIn } = props
  return (
    <div className={css(tx.p0)}>
      <div className={css(tx.flex, tx.flexDirectionColumn, tx.alignItemsCenter, tx.justifyContentCenter, sx.header)}>
        <h1 className={css(tx.fontWeight100, tx.textTransformUppercase, tx.mb4, sx.title)}>Private Key Space Wallet</h1>
        <h2 className={css(tx.fontWeight100, tx.textTransformUppercase, tx.textAlignCenter, sx.subtitle)}>PKS Wallet is an easy-to-use multi-signature wallet for your Trezor device.</h2>
        <div className={css(sx.separator)} />
        <div className={css(tx.flex, tx.flexDirectionRow, tx.textTransformUppercase, sx.getTrezor)}>
          Don't have a Trezor?&nbsp;<a className={css(sx.getTrezorLink)} to='http://trezor.com'>Get here</a>
        </div>
        <div
          className={css(tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, tx.p3, sx.connectTrezor)}
          onClick={handleSignIn}
        >
          <div className={css(tx.flex, tx.justifyContentFlexEnd, tx.alignItemsFlexEnd, tx.flexShrink0, tx.flexGrow0, sx.trezorLogo)}>
            <img className={css(tx.mb2, tx.mr2)} src={startLogo} alt='Sign in with Trezor' />
          </div>
          <div className={css(tx.flexGrow1, tx.textTransformUppercase, tx.textAlignCenter, sx.trezorMessage)}>
            <div className={css(sx.mainMessage)}>Sign In</div>
            <div className={css(sx.subMessage)}>with Trezor</div>
          </div>
        </div>
      </div>
      <div className={css(tx.textAlignCenter, tx.textTransformUppercase, sx.insertHint)}>
          Insert your device to the computer.
        <br />
          Trezor is required to log in to the application.
      </div>
      <Footer />
    </div>
  )
}

export default enhance(View)

import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../theme/styles'
import sx from './styles'
import { Menu } from './components'

const displayName = 'components/layouts/WalletLayout/components/Header'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function Header (props) {
  const { content } = props
  return (
    <div className={css(tx.p5, tx.pt3, tx.flex, tx.flexDirectionColumn, tx.width100, sx.container)}>
      <div className={css(tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, tx.width100, sx.navbar)}>
        <h2 className={css(tx.textTransformUppercase)}>
          PKS Wallet
        </h2>
        <div className={css(tx.mr4, tx.fontSize1, sx.notifications)}>
          <span className='lnr lnr-alarm' />
          <div className={css(sx.notificationCounterWrap)}>
            <div className={css(tx.flex, tx.alignItemsCenter, tx.justifyContentCenter, sx.notificationCounter)}>5</div>
          </div>
        </div>
        <div className={css(sx.separator)} />
        <div className={css(tx.ml4, tx.flex, tx.flexDirectionColumn, tx.alignItemsFlexEnd)}>
          <div className={css(tx.textTransformUppercase, sx.deviceName)}>
            Trezor Label
          </div>
          <div className={css(tx.textTransformUppercase, sx.deviceStatus)}>
            connected
          </div>
        </div>
        <Menu />
      </div>
      <div className={css(tx.pb3, sx.content)}>
        {content}
      </div>
    </div>
  )
}

export default enhance(Header)

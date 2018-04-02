import React from 'react'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../theme/styles'
import sx from './styles'

function DashboardHeader (props) {
  const { headerContent } = props
  return (
    <div className={css(tx.p4, tx.pt3, tx.flex, tx.flexDirectionColumn, tx.width100, sx.container)}>
      <div className={css(tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, tx.width100, sx.navbar)}>
        <div className={css(sx.walletName)}>PKS Wallet</div>
        <div className={css(tx.mr2, sx.notifications)}>🛎</div>
        <div className={css(tx.mx2, sx.separator)} />
        <div className={css(tx.flex, tx.flexDirectionColumn, sx.deviceInfo)}>
          <div className={css(sx.deviceName)}>Trezor Label</div>
          <div className={css(sx.deviceStatus)}>connected</div>
        </div>
        <div className={css(sx.dropdownButton)} />
      </div>
      <div className={css(tx.pb4, sx.headerContent)}>
        {headerContent}
      </div>
    </div>
  )
}

export default DashboardHeader

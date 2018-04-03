import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../theme/styles'
import sx from './styles'

const displayName = 'components/layouts/DashboardLayout/components/DashboardHeader'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function DashboardHeader (props) {
  const { headerContent } = props
  return (
    <div className={css(tx.p4, tx.pt3, tx.flex, tx.flexDirectionColumn, tx.width100, sx.container)}>
      <div className={css(tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, tx.width100, sx.navbar)}>
        <div className={css(tx.textTransformUppercase, tx.fontSize1)}>
          PKS Wallet
        </div>
        <div className={css(tx.mr4, tx.fontSize1, sx.notifications)}>
          <span className='lnr lnr-alarm' />
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
        <div className={css(tx.flex, tx.alignItemsCenter, tx.justifyContentCenter, tx.px2, tx.ml1, tx.height100, sx.dropdownButton)}>
          <span className='lnr lnr-chevron-down' />
        </div>
      </div>
      <div className={css(tx.pb3, sx.headerContent)}>
        {headerContent}
      </div>
    </div>
  )
}

export default enhance(DashboardHeader)

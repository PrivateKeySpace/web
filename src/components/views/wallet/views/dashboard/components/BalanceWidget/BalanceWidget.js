import React from 'react'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../../../theme/styles'
import sx from './styles'

function BalanceWidget () {
  return (
    <div className={css(tx.flex, tx.flexDirectionRow)}>
      <div className={css(tx.mr4, tx.pt1, sx.icon)}>
        <span className='lnr lnr-briefcase' />
      </div>
      <div className={css(sx.info)}>
        <div className={css(tx.textTransformUppercase, tx.fontWeight400, sx.accountName)}>Personal Account</div>
        <div className={css(tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, sx.balance)}>
          <div className={css(tx.fontWeight400, sx.usdBalance)}>2500 USD</div>
          <div className={css(tx.ml2, sx.btcBalance)}>
            0.5
            <br />
            BTC
          </div>
        </div>
        <div>View all personal accounts</div>
      </div>
    </div>
  )
}

export default BalanceWidget

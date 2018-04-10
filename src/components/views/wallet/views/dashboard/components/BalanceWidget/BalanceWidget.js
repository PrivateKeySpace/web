import React from 'react'
import { compose, setDisplayName, setPropTypes, defaultProps } from 'recompose'
import { css } from 'aphrodite/no-important'
import { propTypes, defaultPropsSpec } from './lib'
import tx from '../../../../../../../theme/styles'
import sx from './styles'
import { Link } from '../../../../../../elements'

const displayName = 'components/views/wallet/views/dashboard/components/BalanceWidget'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  defaultProps(defaultPropsSpec)
)

function BalanceWidget (props) {
  const { usdValue, btcValue } = props

  return (
    <div className={css(tx.mr2, tx.flex, tx.flexDirectionRow)}>
      <div className={css(tx.mr4, tx.pt1, sx.icon)}>
        <span className='lnr lnr-briefcase' />
      </div>
      <div className={css(sx.info)}>
        <div className={css(tx.textTransformUppercase, tx.fontWeight400, sx.accountName)}>Personal Account</div>
        <div className={css(tx.flex, tx.flexDirectionRow, tx.alignItemsCenter, sx.balance)}>
          <div className={css(tx.fontWeight400, sx.usdBalance)}>{usdValue} USD</div>
          <div className={css(tx.ml2, sx.btcBalance)}>
            {btcValue}
            <br />
            BTC
          </div>
        </div>
        <Link to='/'>View all personal accounts</Link>
      </div>
    </div>
  )
}

export default enhance(BalanceWidget)

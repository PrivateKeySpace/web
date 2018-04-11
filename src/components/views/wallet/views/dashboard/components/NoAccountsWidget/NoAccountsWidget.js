import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../../../theme/styles'
import sx from './styles'
import { Button } from '../../../../../../elements'

const displayName = 'components/views/wallet/views/dashboard/components/NoAccountsWidget'
const enhance = compose(
  setDisplayName(displayName),
  pure
)

function NoAccountsWidget () {
  return (
    <div className={css(tx.mx2, tx.flex, tx.flexDirectionRow)}>
      <div className={css(tx.mr4, tx.pt1, sx.icon)}>
        <span className='lnr lnr-users' />
      </div>
      <div className={css(sx.info)}>
        <div className={css(tx.mb1, tx.textTransformUppercase, tx.fontWeight400, sx.noAccountsMessage)}>You don't have multisig accounts yet</div>
        <Button type='button' variant='success' disabled>Add Account</Button>
      </div>
    </div>
  )
}

export default enhance(NoAccountsWidget)

import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../theme/styles'
import sx from './styles'
import { WalletLayout } from '../../../../layouts'
import { mapDispatch, handlers } from './lib'
import { Button, Table } from '../../../../elements'
import { BalanceWidget, NoAccountsWidget } from './components'

const displayName = 'components/views/wallet/View'

const enhance = compose(
  setDisplayName(displayName),
  connect(undefined, mapDispatch),
  withHandlers(handlers),
  pure
)

const approvalColumns = [
  {name: 'Date', key: 'date'},
  {name: 'Status', key: 'status'},
  {name: 'Created By', key: 'createdBy'},
  {name: 'To', key: 'to'},
  {name: 'Amount', key: 'amount'},
  {name: 'Reason', key: 'reason'}
]

function View (props) {
  const { handleSignOut } = props
  return (
    <WalletLayout
      topBarContent={
        'Running in TestNet'
      }
      headerContent={
        <div className={css(tx.flex, tx.width100, tx.flexDirectionRow, tx.justifyContentSpaceBetween)}>
          <h1 className={css(tx.fontWeight300)}>
          Dashboard
          </h1>
          <Button type='button' onClick={handleSignOut}>Sign Out</Button>
        </div>
      }
      mainContent={
        <div className={css(tx.p0)}>
          <div className={css(tx.mb5, tx.flex, tx.flexDirectionRow)}>
            <BalanceWidget usdValue={2500} btcValue={0.5} />
            <div className={css(tx.mx5, sx.separator)} />
            <NoAccountsWidget />
          </div>
          <h2 className={css(tx.textTransformUppercase, tx.mt3, tx.mb2)}>Approval Requests</h2>
          <Table columns={approvalColumns} emptyMessage='No approval requests yet' />
        </div>
      }
    />
  )
}

export default enhance(View)

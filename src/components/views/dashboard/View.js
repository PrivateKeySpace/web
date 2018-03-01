import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { BaseLayout } from '../../layouts'
import { mapState, mapDispatch } from './lib'

const displayName = 'components/views/dashboard/View'

const enhance = compose(
  setDisplayName(displayName),
  connect(mapState, mapDispatch),
  pure
)

function renderAccounts (props) {
  if (props.accounts.length === 0) {
    return null
  }

  const tableHeader = <tr>
    <th>Address</th>
    <th>Balance</th>
    <th>Is SegWit?</th>
  </tr>

  const accountRows = props.accounts.map(account =>
    <tr key={account.address}>
      <td>{account.address}</td>
      <td>{account.balance}</td>
      <td>{account.segwit.toString()}</td>
    </tr>
  )

  return (
    <table>
      <thead>{tableHeader}</thead>
      <tbody>{accountRows}</tbody>
    </table>
  )
}

function View (props) {
  return (
    <BaseLayout
      mainContent={
        <div className={css(tx.p0)}>
          <button type='button' onClick={props.getAccounts}>Get accounts</button>
          {renderAccounts(props)}
        </div>
      }
    />
  )
}

export default enhance(View)

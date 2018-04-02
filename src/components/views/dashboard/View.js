import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { DashboardLayout } from '../../layouts'
import { mapDispatch, handlers } from './lib'

const displayName = 'components/views/dashboard/View'

const enhance = compose(
  setDisplayName(displayName),
  connect(undefined, mapDispatch),
  withHandlers(handlers),
  pure
)

function View (props) {
  const { handleSignOut } = props
  return (
    <DashboardLayout
      topBarContent={
        'Running in testnet'
      }
      headerContent={
        <h1 className={css(tx.fontWeight300)}>Dashboard</h1>
      }
      mainContent={
        <div className={css(tx.p0)}>
          <button type='button' onClick={handleSignOut}>Sign out</button>
        </div>
      }
    />
  )
}

export default enhance(View)

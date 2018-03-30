import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { DashboardLayout } from '../../layouts'
import { mapDispatch, handlers } from './lib'
import DashboardHeader from '../../elements/DashboardHeader'

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
      mainContent={
        <div className={css(tx.p0)}>
          <DashboardHeader
            headerContent={
              <h1>Dashboard</h1>
            }
          />
          <button type='button' onClick={handleSignOut}>Sign out</button>
        </div>
      }
    />
  )
}

export default enhance(View)

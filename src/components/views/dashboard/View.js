import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { BaseLayout } from '../../layouts'
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
    <BaseLayout
      mainContent={
        <div className={css(tx.p0)}>
          <p>Dashboard</p>
          <button type='button' onClick={handleSignOut}>Sign out</button>
        </div>
      }
    />
  )
}

export default enhance(View)

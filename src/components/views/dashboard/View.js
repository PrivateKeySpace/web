import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { BaseLayout } from '../../layouts'
import { mapDispatch } from './lib'

const displayName = 'components/views/dashboard/View'

const enhance = compose(
  setDisplayName(displayName),
  connect(null, mapDispatch),
  pure
)

function View (props) {
  return (
    <BaseLayout
      mainContent={
        <div className={css(tx.p0)}>
          <p>Dashboard</p>
          <button type='button' onClick={props.signOut}>Sign out</button>
        </div>
      }
    />
  )
}

export default enhance(View)

import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { BaseLayout } from '../../layouts'
import { mapState, mapDispatch } from './lib'

const displayName = 'components/views/signin/View'

const enhance = compose(
  setDisplayName(displayName),
  connect(mapState, mapDispatch),
  pure
)

function View (props) {
  return (
    <BaseLayout
      mainContent={
        <div className={css(tx.p0)}>
          <button type='button' onClick={props.signIn}>
            Log in with Trezor
          </button>
        </div>
      }
    />
  )
}

export default enhance(View)

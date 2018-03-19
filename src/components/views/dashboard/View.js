import React from 'react'
import { compose, setDisplayName, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { BaseLayout } from '../../layouts'

const displayName = 'components/views/dashboard/View'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function View (props) {
  return (
    <BaseLayout
      mainContent={
        <div className={css(tx.p0)}>
          Dashboard
        </div>
      }
    />
  )
}

export default enhance(View)

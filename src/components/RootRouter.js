import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { compose, setDisplayName, pure } from 'recompose'
import { Router as SignInRouter } from './views/signin'
import { Router as WalletRouter } from './views/wallet'

import { withNotAuthenticatedOnlyRedirect, withAuthenticatedOnlyRedirect } from './helpers'

const displayName = 'components/RootRouter'

const enhance = compose(
  setDisplayName(displayName),
  withRouter,
  pure
)

function RootRouter () {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={() => <Redirect to='/signin' />}
      />
      <Route
        path='/signin'
        component={withNotAuthenticatedOnlyRedirect(SignInRouter)}
      />
      <Route
        path='/wallet'
        component={withAuthenticatedOnlyRedirect(WalletRouter)}
      />
    </Switch>
  )
}

export default enhance(RootRouter)

import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { compose, setDisplayName, pure } from 'recompose'
import { Router as SignInRouter } from './views/signin'
import { Router as DashboardRouter } from './views/dashboard'

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
        path='/dashboard'
        component={withAuthenticatedOnlyRedirect(DashboardRouter)}
      />
    </Switch>
  )
}

export default enhance(RootRouter)

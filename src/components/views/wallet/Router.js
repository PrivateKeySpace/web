
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { compose, setDisplayName, pure } from 'recompose'
import { Router as DashboardRouter } from './views/dashboard'

const displayName = 'components/views/wallet/Router'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function Router () {
  return <Switch>
    <Route
      exact
      path='/wallet'
      component={() => <Redirect to='/wallet/dashboard' />}
    />
    <Route
      path='/wallet/dashboard'
      component={DashboardRouter}
    />
  </Switch>
}

export default enhance(Router)

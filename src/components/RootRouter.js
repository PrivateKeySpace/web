import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { compose, setDisplayName, pure } from 'recompose'
import { Router as TestRouter } from './views/test'

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
        component={() => <Redirect to='/test' />}
      />
      <Route
        path='/test'
        component={TestRouter}
      />
    </Switch>
  )
}

export default enhance(RootRouter)

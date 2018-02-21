
import React from 'react'
import { Route } from 'react-router'
import { compose, setDisplayName, pure } from 'recompose'
import { View } from '.'

const displayName = 'components/views/test/Router'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function Router () {
  return (
    <Route
      exact
      path='/test'
      component={View}
    />
  )
}

export default enhance(Router)

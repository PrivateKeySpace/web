
import React from 'react'
import { Route } from 'react-router'
import { compose, setDisplayName, pure } from 'recompose'
import { View } from '.'

const displayName = 'components/views/dashboard/Router'

const enhance = compose(
  setDisplayName(displayName),
  pure
)

function Router () {
  return (
    <Route
      path='/'
      component={View}
    />
  )
}

export default enhance(Router)

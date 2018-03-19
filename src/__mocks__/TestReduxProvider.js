import React from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import { compose, setDisplayName, setPropTypes, defaultProps } from 'recompose'
import rootReducer from '../store/rootReducer'

const displayName = '__mocks__/TestReduxProvider'

const enhance = compose(
  setDisplayName(displayName),
  setPropTypes({ state: PropTypes.object, children: PropTypes.any }),
  defaultProps({ state: {} })
)

function TestReduxProvider (props) {
  const { state, children } = props
  const store = createStore(rootReducer, state)

  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}

export default enhance(TestReduxProvider)

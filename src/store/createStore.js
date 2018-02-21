import { compose, applyMiddleware, createStore } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { responsiveStoreEnhancer } from 'redux-responsive'
import { createEpicMiddleware } from 'redux-observable'
import getInitialState from './getInitialState'
import rootReducer from './rootReducer'
import rootEpic from './rootEpic'
import addHandlers from './addHandlers'

function createStoreWrapper (history) {
  const middleware = [
    createRouterMiddleware(history),
    createEpicMiddleware(rootEpic)
  ]

  const enhancers = [
    responsiveStoreEnhancer,
    applyMiddleware(...middleware)
  ]

  if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const initialState = getInitialState()
  const enhancer = compose(...enhancers)

  const store = createStore(rootReducer, initialState, enhancer)

  addHandlers(store)

  return store
}

export default createStoreWrapper

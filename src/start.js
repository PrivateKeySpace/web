import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createHashHistory } from 'history'
import createStore from './store/createStore'
import { RootRouter } from './components'

const history = createHashHistory()

const appStore = createStore(history)

const app = (
  <ReduxProvider store={appStore}>
    <ConnectedRouter history={history}>
      <RootRouter />
    </ConnectedRouter>
  </ReduxProvider>
)

function startApp () {
  const appMountNode = window.document.getElementById('app')
  render(app, appMountNode)
}

window.document.addEventListener('DOMContentLoaded', startApp)

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import screenReducer from './modules/screen/reducer'
import asyncReducer from './modules/async/reducer'
import authReducer from './modules/auth/reducer'
import accountsReducer from './modules/accounts/reducer'

const rootReducer = combineReducers({
  screen: screenReducer,
  router: routerReducer,
  form: formReducer,
  async: asyncReducer,
  auth: authReducer,
  accounts: accountsReducer
})

export default rootReducer

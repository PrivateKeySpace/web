import { storage } from '../utils'
import * as authConstants from './modules/auth/constants'

function getInitialState () {
  const initialState = {}

  {
    const cachedAuthState = storage.get(authConstants.STORAGE_RECORD_KEY)
    if (cachedAuthState !== null) {
      initialState.auth = cachedAuthState
    }
  }

  return initialState
}

export default getInitialState

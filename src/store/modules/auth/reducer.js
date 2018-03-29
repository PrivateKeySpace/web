import { SIGN_IN, SIGN_OUT } from './actionsTypes'
import { STATUS_SUCCESS } from '../async/constants'

export const initialState = {
  token: null
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case `${SIGN_IN}/${STATUS_SUCCESS}`: {
      return { ...state, ...payload }
    }
    case SIGN_OUT: {
      return { ...state, token: null }
    }
    default: {
      return state
    }
  }
}

export default reducer

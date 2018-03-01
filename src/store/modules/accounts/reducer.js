import { GET_ACCOUNTS } from './actionTypes'
import { STATUS_SUCCESS } from '../async/constants'

export const initialState = {
  items: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case `${GET_ACCOUNTS}/${STATUS_SUCCESS}`: {
      return { ...state, items: payload.items }
    }
    default: {
      return state
    }
  }
}

export default reducer

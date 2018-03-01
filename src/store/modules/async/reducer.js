import { cloneDeep } from 'lodash'
import { LOCATION_CHANGE } from 'react-router-redux'
import { REPORT_STATUS, REPORT_ERROR } from './actionsTypes'

export const initialState = {
  errors: {},
  statuses: {}
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REPORT_STATUS: {
      const { type, status } = payload
      const statuses = cloneDeep(state.statuses)

      statuses[type] = status

      return { ...state, statuses }
    }
    case REPORT_ERROR: {
      const { type, error } = payload
      const errors = cloneDeep(state.errors)

      errors[type] = error

      return { ...state, errors }
    }
    case LOCATION_CHANGE: {
      return initialState
    }
    default: {
      break
    }
  }

  return state
}

import { cloneDeep } from 'lodash'
import { REPORT_STATUS, REPORT_ERROR } from './actionsTypes'

const initialState = {
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
    default: {
      break
    }
  }

  return state
}

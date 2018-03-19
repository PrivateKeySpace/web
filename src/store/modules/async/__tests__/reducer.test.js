import { STATUS_SUCCESS } from '../constants'
import { REPORT_STATUS, REPORT_ERROR } from '../actionsTypes'
import reducer from '../reducer'

it('populates state with reported status', () => {
  const state = { statuses: {} }
  const action = {
    type: REPORT_STATUS,
    payload: { type: 'arbitrary', status: STATUS_SUCCESS }
  }

  const newState = reducer(state, action)

  expect(newState).toHaveProperty('statuses')
  expect(newState.statuses).toHaveProperty(action.payload.type, action.payload.status)
})

it('populates state with reported error', () => {
  const state = { errors: {} }
  const action = {
    type: REPORT_ERROR,
    payload: { type: 'arbitrary', error: 'someerror' }
  }

  const newState = reducer(state, action)

  expect(newState).toHaveProperty('errors')
  expect(newState.errors).toHaveProperty(action.payload.type, action.payload.error)
})

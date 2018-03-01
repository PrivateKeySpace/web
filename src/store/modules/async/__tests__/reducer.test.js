import { STATUS_SUCCESS } from '../constants'
import { reportStatus, reportError } from '../actions'
import { default as reducer, initialState } from '../reducer'

it('populates state with reported status', () => {
  const action = reportStatus({ type: 'arbitrary', status: STATUS_SUCCESS })

  const newState = reducer(initialState, action)

  expect(newState).toHaveProperty('statuses')
  expect(newState.statuses).toHaveProperty(action.payload.type, action.payload.status)
})

it('populates state with reported error', () => {
  const action = reportError({ type: 'arbitrary', error: 'someerror' })

  const newState = reducer(initialState, action)

  expect(newState).toHaveProperty('errors')
  expect(newState.errors).toHaveProperty(action.payload.type, action.payload.error)
})

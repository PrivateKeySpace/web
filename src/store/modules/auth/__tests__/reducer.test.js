import { STATUS_SUCCESS } from '../../async/constants'
import { SIGN_IN, SIGN_OUT } from '../actionsTypes'
import { default as reducer, initialState } from '../reducer'

const testToken = 'testtokentesttoken'

it('populates state with sign in payload on sign in success', () => {
  const action = { type: `${SIGN_IN}/${STATUS_SUCCESS}`, payload: { token: testToken } }

  const newState = reducer(initialState, action)

  expect(newState).toHaveProperty('token', action.payload.token)
})

it('sets token to null on sign out', () => {
  const action = { type: SIGN_OUT }

  const state = { ...initialState, token: testToken }
  const newState = reducer(state, action)

  expect(newState).toHaveProperty('token', null)
})

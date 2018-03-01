import { STATUS_SUCCESS } from '../../async/constants'
import { SIGN_IN } from '../actionsTypes'
import { default as reducer, initialState } from '../reducer'

it('populates state with sign in payload on sign in success', () => {
  const action = { type: `${SIGN_IN}/${STATUS_SUCCESS}`, payload: { token: 'testtokentesttoken' } }

  const newState = reducer(initialState, action)

  expect(newState).toHaveProperty('token', action.payload.token)
})

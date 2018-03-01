import { STATUS_SUCCESS } from '../../async/constants'
import { GET_ACCOUNTS } from '../actionTypes'
import { default as reducer, initialState } from '../reducer'
import accountList from '../__mocks__/accountList'

it('populates state with accounts on get accounts success', () => {
  const action = {
    type: `${GET_ACCOUNTS}/${STATUS_SUCCESS}`,
    payload: { items: accountList }
  }

  const newState = reducer(initialState, action)

  expect(newState).toHaveProperty('items', accountList)
})

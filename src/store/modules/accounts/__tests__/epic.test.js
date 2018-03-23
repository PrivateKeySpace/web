import { ActionsObservable } from 'redux-observable'
import { getAccounts } from '../actions'
import { reportStatus } from '../../async/actions'
import { GET_ACCOUNTS } from '../actionTypes'
import { STATUS_PENDING, STATUS_SUCCESS, STATUS_FAILURE } from '../../async/constants'
import epic from '../epic'
import accountList from '../__mocks__/accountList'

const trezorGetAllAccountsInfoSuccessPayload = { success: true, accounts: accountList }
const trezorGetAllAccountsInfoFailurePayload = { success: false }

function createMockTrezorConnect (accountInfoPayload) {
  const TrezorConnect = {}
  TrezorConnect.getAllAccountsInfo = (callback) => { callback(accountInfoPayload) }
  return TrezorConnect
}

it('emits get accounts pending, then get accounts success when Trezor get all accounts succeeds', async () => {
  global.window.TrezorConnect = createMockTrezorConnect(trezorGetAllAccountsInfoSuccessPayload)

  const action$ = ActionsObservable.of(getAccounts())

  const expectedActions = [
    reportStatus({ type: GET_ACCOUNTS, status: STATUS_PENDING }),
    { type: `${GET_ACCOUNTS}/${STATUS_PENDING}` },
    reportStatus({ type: GET_ACCOUNTS, status: STATUS_SUCCESS }),
    { type: `${GET_ACCOUNTS}/${STATUS_SUCCESS}`, payload: { items: accountList } }
  ]

  await epic(action$).toArray().forEach(actions => { expect(actions).toEqual(expectedActions) })
})

it('emits get accounts pending, then get accounts failure when Trezor get all accounts fails', async () => {
  global.window.TrezorConnect = createMockTrezorConnect(trezorGetAllAccountsInfoFailurePayload)

  const action$ = ActionsObservable.of(getAccounts())

  const expectedActions = [
    reportStatus({ type: GET_ACCOUNTS, status: STATUS_PENDING }),
    { type: `${GET_ACCOUNTS}/${STATUS_PENDING}` },
    reportStatus({ type: GET_ACCOUNTS, status: STATUS_FAILURE }),
    { type: `${GET_ACCOUNTS}/${STATUS_FAILURE}`,
      payload: {
        error: 'Failed to get accounts.'
      }
    }
  ]

  await epic(action$).toArray().forEach(actions => { expect(actions).toEqual(expectedActions) })
})

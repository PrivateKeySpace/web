import { Observable } from 'rxjs'
import { GET_ACCOUNTS } from './actionTypes'
import { STATUS_PENDING, STATUS_SUCCESS, STATUS_FAILURE } from '../async/constants'
import { reportStatus } from '../async/actions'

function emitGetAllAccountsInfoPending () {
  return Observable.merge(
    Observable.of(reportStatus({ type: GET_ACCOUNTS, status: STATUS_PENDING })),
    Observable.of({ type: `${GET_ACCOUNTS}/${STATUS_PENDING}` })
  )
}

function trezorGetAllAccountsInfo (callback) {
  const wrappedCallback = rawPayload => {
    const payload = (
      rawPayload.success
        ? { items: rawPayload.accounts }
        : null
    )
    callback(payload)
  }

  window.TrezorConnect.getAllAccountsInfo(wrappedCallback)
}

function getAllAccountsInfo () {
  const trezorGetAllAccountsInfo$ = Observable.bindCallback(trezorGetAllAccountsInfo)

  return trezorGetAllAccountsInfo$()
    .switchMap(payload =>
      payload !== null
        ? Observable.of(payload)
        : Observable.throw({ error: 'Failed to get accounts.' })
    )
}

function emitGetAllAccountsInfoSucceed (payload) {
  return Observable.merge(
    Observable.of(reportStatus({ type: GET_ACCOUNTS, status: STATUS_SUCCESS })),
    Observable.of({ type: `${GET_ACCOUNTS}/${STATUS_SUCCESS}`, payload })
  )
}

function emitGetAllAccountsInfoFailed (payload) {
  return Observable.merge(
    Observable.of(reportStatus({ type: GET_ACCOUNTS, status: STATUS_FAILURE })),
    Observable.of({ type: `${GET_ACCOUNTS}/${STATUS_FAILURE}`, payload })
  )
}

function mapToGetAccounts$ (action) {
  return Observable
    .concat(
      emitGetAllAccountsInfoPending(),
      getAllAccountsInfo()
        .switchMap(emitGetAllAccountsInfoSucceed)
    )
    .catch(emitGetAllAccountsInfoFailed)
}

const epic = action$ =>
  action$
    .ofType(GET_ACCOUNTS)
    .switchMap(mapToGetAccounts$)

export default epic

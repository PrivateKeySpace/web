import { Observable } from 'rxjs'
import { STATUS_PENDING, STATUS_SUCCESS, STATUS_FAILURE, METHOD_POST } from '../../async/constants'
import { reportStatus } from '../../async/actions'
import { apiRequest } from '../../async/lib/index'
import { SIGN_IN } from '../actionsTypes'

function emitSignInPending () {
  return Observable.merge(
    Observable.of(reportStatus({ type: SIGN_IN, status: STATUS_PENDING })),
    Observable.of({ type: `${SIGN_IN}/${STATUS_PENDING}` })
  )
}

function startSignInSession () {
  return apiRequest(null, METHOD_POST, '/auth/signin/start')
    .switchMap(response =>
      (response.status >= 200 && response.status < 300)
        ? Observable.of(response.body)
        : Observable.throw({ error: 'Failed to start signin session.' })
    )
}

function requestTrezorSignIn (hostIcon, challengeHidden, challengeVisual, callback) {
  const wrappedCallback = rawPayload => {
    const payload = (
      rawPayload.success
        ? { publicKey: rawPayload.public_key, signature: rawPayload.signature, implementation: `trezor/v${rawPayload.version}` }
        : null
    )
    callback(payload)
  }
  return window.TrezorConnect.requestLogin(hostIcon, challengeHidden, challengeVisual, wrappedCallback)
}

function requestDeviceSignIn (payload) {
  const hostIcon = null
  const { sessionKey, challengeHidden, challengeVisual } = payload

  const requestTrezorSignIn$ = Observable.bindCallback(requestTrezorSignIn)

  return (
    requestTrezorSignIn$(hostIcon, challengeHidden, challengeVisual)
      .switchMap(payload =>
        payload !== null
          ? Observable.of({ sessionKey, ...payload })
          : Observable.throw({ error: 'Failed to signin with hardware wallet.' })
      )
  )
}

function completeSignInSession (payload) {
  return (
    apiRequest(null, METHOD_POST, '/auth/signin/complete', payload)
      .switchMap(response =>
        (response.status >= 200 && response.status < 300)
          ? Observable.of(response.body)
          : Observable.throw({ error: 'Failed to complete signin session.' })
      )
  )
}

function emitSignInSucceed (payload) {
  return Observable.merge(
    Observable.of(reportStatus({ type: SIGN_IN, status: STATUS_SUCCESS })),
    Observable.of({ type: `${SIGN_IN}/${STATUS_SUCCESS}`, payload })
  )
}

function emitSignInFailed (payload) {
  return Observable.merge(
    Observable.of(reportStatus({ type: SIGN_IN, status: STATUS_FAILURE })),
    Observable.of({ type: `${SIGN_IN}/${STATUS_FAILURE}`, payload })
  )
}

function mapToSignInAction$ () {
  return Observable
    .merge(
      emitSignInPending(),
      startSignInSession()
        .switchMap(requestDeviceSignIn)
        .switchMap(completeSignInSession)
        .switchMap(emitSignInSucceed)
    )
    .catch(emitSignInFailed)
}

const signInEpic = action$ =>
  action$
    .ofType(SIGN_IN)
    .switchMap(mapToSignInAction$)

export default signInEpic

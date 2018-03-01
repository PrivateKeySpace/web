import { ActionsObservable } from 'redux-observable'
import nock from 'nock'
import { API_BASE_URL } from '../../../../config'
import { STATUS_PENDING, STATUS_SUCCESS, STATUS_FAILURE } from '../../async/constants'
import { reportStatus } from '../../async/actions'
import { SIGN_IN } from '../actionsTypes'
import { signIn } from '../actions'
import epic from '../epic'

const signInStartResponseMockBody = {
  sessionId: '025405ad0ce3a973',
  challengeHidden: '025405ad0ce3a973998acda781be7583183984cf59082154199af04c26f12fb5',
  challengeVisual: (new Date()).toISOString()
}
const signInCompleteResponseMockBody = { token: 'test' }
const signInResponseMockHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-type': 'application/json'
}

const trezorConnectRequestLoginSuccessPayload = {
  success: true,
  public_key: '025405ad0ce3a973998acda781be7583183984cf59082154199af04c26f12fb5e6',
  signature: '203487412eb88f78a5f4eb8b42d069164cb87f63a2c41d4bc7adbb5174c4c35709cf07ed471008646f29acee102b3c5ebe0',
  version: 2
}
const trezorConnectRequestLoginFailurePayload = {
  success: false,
  version: 2
}

function createMockTrezorConnect (requestLoginPayload) {
  const TrezorConnect = {}
  TrezorConnect.requestLogin = (hostIcon, challengeHidden, challengeVisual, callback) => { callback(requestLoginPayload) }
  return TrezorConnect
}

afterEach(() => {
  nock.cleanAll()
})

it('emits sign in pending, then sign in success with token when sign in session successfully starts, Trezor sign in succeeds, sign in session successfully finishes', async () => {
  nock(API_BASE_URL)
    .post('/auth/signin/start')
    .reply(200, signInStartResponseMockBody, signInResponseMockHeaders)

  nock(API_BASE_URL)
    .post('/auth/signin/complete')
    .reply(200, signInCompleteResponseMockBody, signInResponseMockHeaders)

  global.window.TrezorConnect = createMockTrezorConnect(trezorConnectRequestLoginSuccessPayload)

  const action$ = ActionsObservable.of(signIn())

  const expectedActions = [
    reportStatus({ type: SIGN_IN, status: STATUS_PENDING }),
    { type: `${SIGN_IN}/${STATUS_PENDING}` },
    reportStatus({ type: SIGN_IN, status: STATUS_SUCCESS }),
    { type: `${SIGN_IN}/${STATUS_SUCCESS}`, payload: signInCompleteResponseMockBody }
  ]

  await epic(action$).toArray().forEach(actions => { expect(actions).toEqual(expectedActions) })
})

it('emits sign in pending, then sign in success with token when sign in session fails to start', async () => {
  nock(API_BASE_URL)
    .post('/auth/signin/start')
    .reply(403, signInStartResponseMockBody, signInResponseMockHeaders)

  nock(API_BASE_URL)
    .post('/auth/signin/complete')
    .reply(200, signInCompleteResponseMockBody, signInResponseMockHeaders)

  global.window.TrezorConnect = createMockTrezorConnect(trezorConnectRequestLoginSuccessPayload)

  const action$ = ActionsObservable.of(signIn())

  const expectedActions = [
    reportStatus({ type: SIGN_IN, status: STATUS_PENDING }),
    { type: `${SIGN_IN}/${STATUS_PENDING}` },
    reportStatus({ type: SIGN_IN, status: STATUS_FAILURE }),
    { type: `${SIGN_IN}/${STATUS_FAILURE}`, payload: { error: 'Failed to start signin session.' } }
  ]

  await epic(action$).toArray().forEach(actions => { expect(actions).toEqual(expectedActions) })
})

it('emits sign in pending, then sign in failure when sign in session successfully starts, Trezor sign in succeeds, sign in session fails to finish', async () => {
  nock(API_BASE_URL)
    .post('/auth/signin/start')
    .reply(200, signInStartResponseMockBody, signInResponseMockHeaders)

  nock(API_BASE_URL)
    .post('/auth/signin/complete')
    .reply(403, signInCompleteResponseMockBody, signInResponseMockHeaders)

  global.window.TrezorConnect = createMockTrezorConnect(trezorConnectRequestLoginSuccessPayload)

  const action$ = ActionsObservable.of(signIn())

  const expectedActions = [
    reportStatus({ type: SIGN_IN, status: STATUS_PENDING }),
    { type: `${SIGN_IN}/${STATUS_PENDING}` },
    reportStatus({ type: SIGN_IN, status: STATUS_FAILURE }),
    { type: `${SIGN_IN}/${STATUS_FAILURE}`, payload: { error: 'Failed to complete signin session.' } }
  ]

  await epic(action$).toArray().forEach(actions => { expect(actions).toEqual(expectedActions) })
})

it('emits sign in pending, then sign in failure when sign in session successfully starts, Trezor sign in fails', async () => {
  nock(API_BASE_URL)
    .post('/auth/signin/start')
    .reply(200, signInStartResponseMockBody, signInResponseMockHeaders)

  nock(API_BASE_URL)
    .post('/auth/signin/complete')
    .reply(200, signInCompleteResponseMockBody, signInResponseMockHeaders)

  global.window.TrezorConnect = createMockTrezorConnect(trezorConnectRequestLoginFailurePayload)

  const action$ = ActionsObservable.of(signIn())

  const expectedActions = [
    reportStatus({ type: SIGN_IN, status: STATUS_PENDING }),
    { type: `${SIGN_IN}/${STATUS_PENDING}` },
    reportStatus({ type: SIGN_IN, status: STATUS_FAILURE }),
    { type: `${SIGN_IN}/${STATUS_FAILURE}`, payload: { error: 'Failed to signin with hardware wallet.' } }
  ]

  await epic(action$).toArray().forEach(actions => { expect(actions).toEqual(expectedActions) })
})

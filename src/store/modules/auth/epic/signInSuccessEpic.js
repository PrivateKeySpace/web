import { Observable } from 'rxjs'
import { storage } from '../../../../utils'
import { STATUS_SUCCESS } from '../../async/constants'
import { STORAGE_RECORD_KEY, STORAGE_RECORD_TTL } from '../constants'
import { SIGN_IN } from '../actionsTypes'
import { initialState } from '../reducer'

function handleSignInSuccess (payload) {
  const { token } = payload
  storage.set(STORAGE_RECORD_KEY, { ...initialState, token }, STORAGE_RECORD_TTL)
}

function mapToSignInSuccessAction$ () {
  return Observable.empty()
}

const signInSuccessEpic = action$ =>
  action$
    .ofType(`${SIGN_IN}/${STATUS_SUCCESS}`)
    .do(action => handleSignInSuccess(action.payload))
    .switchMap(mapToSignInSuccessAction$)

export default signInSuccessEpic

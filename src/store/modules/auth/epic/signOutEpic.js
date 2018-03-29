import { Observable } from 'rxjs'
import { storage } from '../../../../utils'
import { STORAGE_RECORD_KEY } from '../constants'
import { SIGN_OUT } from '../actionsTypes'

function handleSignOut () {
  storage.remove(STORAGE_RECORD_KEY)
}

function mapToSignOutAction$ () {
  return Observable.empty()
}

const signOutEpic = action$ =>
  action$
    .ofType(SIGN_OUT)
    .do(handleSignOut)
    .switchMap(mapToSignOutAction$)

export default signOutEpic

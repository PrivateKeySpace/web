import { combineEpics } from 'redux-observable'
import authEpic from './modules/auth/epic'
import accountsEpic from './modules/accounts/epic'

const rootEpic = combineEpics(authEpic, accountsEpic)

export default rootEpic

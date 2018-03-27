import { combineEpics } from 'redux-observable'
import authEpic from './modules/auth/epic/index'
import accountsEpic from './modules/accounts/epic'

const rootEpic = combineEpics(authEpic, accountsEpic)

export default rootEpic

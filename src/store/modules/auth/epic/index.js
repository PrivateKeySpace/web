import { combineEpics } from 'redux-observable'
import signInEpic from './signInEpic'
import signInSuccessEpic from './signInSuccessEpic'

export default combineEpics(signInEpic, signInSuccessEpic)

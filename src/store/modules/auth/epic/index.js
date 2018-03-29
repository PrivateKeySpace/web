import { combineEpics } from 'redux-observable'
import signInEpic from './signInEpic'
import signInSuccessEpic from './signInSuccessEpic'
import signOutEpic from './signOutEpic'

export default combineEpics(signInEpic, signInSuccessEpic, signOutEpic)

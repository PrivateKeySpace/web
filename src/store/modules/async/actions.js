import { REPORT_STATUS, REPORT_ERROR } from './actionsTypes'

export const reportStatus = payload => ({ type: REPORT_STATUS, payload })
export const reportError = payload => ({ type: REPORT_ERROR, payload })

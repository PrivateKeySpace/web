import { identity } from 'lodash'
import { Observable } from 'rxjs'
import { reportStatus, reportError } from '../actions'
import { STATUS_PENDING, STATUS_SUCCESS, STATUS_FAILURE } from '../constants'
import apiRequest from './apiRequest'

const mapPayloadNoop = identity
const mapStreamNoop = () => Observable.empty()

function apiRequestHelper (params) {
  const { token, type, method, path, payload } = params
  let { mapSuccessPayload, mapFailurePayload, mapSuccessStream, mapFailureStream } = params

  return Observable.merge(
    Observable.of({ type: `${type}/${STATUS_PENDING}` }),
    Observable.of(reportStatus({ type, status: STATUS_PENDING })),
    apiRequest(token, method, path, payload)
      .switchMap(response => {
        if (response.status >= 200 && response.status < 300) {
          mapSuccessPayload = mapSuccessPayload || mapPayloadNoop
          mapSuccessStream = mapSuccessStream || mapStreamNoop

          const successPayload = mapSuccessPayload(response)

          return Observable.merge(
            Observable.of({ type: `${type}/${STATUS_SUCCESS}`, payload: successPayload }),
            Observable.of(reportStatus({ type, status: STATUS_SUCCESS })),
            mapSuccessStream(successPayload)
          )
        } else {
          mapFailurePayload = mapFailurePayload || mapPayloadNoop
          mapFailureStream = mapFailureStream || mapStreamNoop

          const failurePayload = mapFailurePayload(response)

          return Observable.merge(
            Observable.of({ type: `${type}/${STATUS_FAILURE}`, payload: failurePayload }),
            Observable.of(reportStatus({ type, status: STATUS_FAILURE })),
            Observable.of(reportError({ type, error: failurePayload })),
            mapFailureStream(failurePayload)
          )
        }
      })
  )
}

export default apiRequestHelper

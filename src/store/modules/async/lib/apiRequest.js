import { Observable } from 'rxjs'
import { API_BASE_URL } from '../../../../config'

function apiRequest (token, method, path, payload) {
  const requestSettings = {
    method,
    url: `${API_BASE_URL}${path}`,
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    responseType: 'json',
    crossDomain: true
  }

  if (token !== null) {
    requestSettings.headers['Authorization'] = `Bearer: ${token}`
  }

  return Observable
    .ajax(requestSettings)
    .catch(error => Observable.of(error))
    .map(payload => ({ status: payload.status, body: payload.response }))
}

export default apiRequest

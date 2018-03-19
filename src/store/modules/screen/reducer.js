import { createResponsiveStateReducer } from 'redux-responsive'
import { breakpoints } from '../../../theme/constants'

function extraFields () {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

const reducer = createResponsiveStateReducer(breakpoints, { extraFields })

export default reducer

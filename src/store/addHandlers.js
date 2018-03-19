import { debounce } from 'lodash'
import { calculateResponsiveState } from 'redux-responsive'

function addHandlers (store) {
  const handleWindowResize = debounce(() => { store.dispatch(calculateResponsiveState(window)) }, 100)
  window.addEventListener('resize', handleWindowResize)
}

export default addHandlers

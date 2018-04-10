import { Link as RouterLink } from 'react-router-dom'
import { compose, setDisplayName, setPropTypes, mapProps } from 'recompose'
import { propTypes, mapProps as propsMapper } from './lib'

const displayName = 'components/elements/Button'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  mapProps(propsMapper)
)

export default enhance(RouterLink)

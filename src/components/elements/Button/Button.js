import { compose, setDisplayName, setPropTypes, mapProps, pure } from 'recompose'
import { propTypes, mapProps as propsMapper } from './lib'

const displayName = 'components/elements/Button'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  mapProps(propsMapper),
  pure
)

export default enhance('button')

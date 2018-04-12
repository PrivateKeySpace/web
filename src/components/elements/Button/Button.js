import React from 'react'
import { compose, setDisplayName, setPropTypes, mapProps, pure } from 'recompose'
import { propTypes, mapProps as propsMapper } from './lib'

const displayName = 'components/elements/Button'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  mapProps(propsMapper),
  pure
)

function Button (props) {
  return <button {...props} />
}

export default enhance(Button)

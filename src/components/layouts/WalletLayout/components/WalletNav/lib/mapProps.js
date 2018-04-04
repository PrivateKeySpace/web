import { get } from 'lodash'

function mapProps (props) {
  const activePath = get(props, 'location.pathname', null)
  return {
    activePath
  }
}

export default mapProps

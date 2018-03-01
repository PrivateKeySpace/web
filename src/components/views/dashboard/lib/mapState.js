import { get } from 'lodash'

function mapState (state) {
  const accounts = get(state, 'accounts.items', [])
  return {
    accounts
  }
}

export default mapState

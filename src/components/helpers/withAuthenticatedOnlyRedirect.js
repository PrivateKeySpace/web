import { get } from 'lodash'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

const withAuthenticatedOnlyRedirect = connectedRouterRedirect({
  wrapperDisplayName: 'components/helpers/withAuthenticatedOnlyRedirect',
  redirectPath: '/signin',
  allowRedirectBack: false,
  authenticatedSelector: state => !!get(state, 'auth.token', null)
})

export default withAuthenticatedOnlyRedirect

import { get } from 'lodash'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

const withNotAuthenticatedOnlyRedirect = connectedRouterRedirect({
  wrapperDisplayName: 'components/helpers/withNotAuthenticatedOnlyRedirect',
  redirectPath: '/dashboard',
  allowRedirectBack: false,
  authenticatedSelector: state => !get(state, 'auth.token', null)
})

export default withNotAuthenticatedOnlyRedirect

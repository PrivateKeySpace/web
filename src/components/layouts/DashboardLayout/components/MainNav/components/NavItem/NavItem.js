import React from 'react'
import { Route, Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../../../theme/styles'
import sx from './styles'

function NavItem (props) {
  const { to, children } = props
  return (
    <Route path={to}>
      {({ match }) =>
        <Link to={to}>
          <div
            className={css(tx.p3, tx.pl4, tx.flex, tx.alignItemsCenter, sx.wrap, match && sx.active)}
          >
            {children}
          </div>
        </Link>
      }
    </Route>
  )
}

export default NavItem

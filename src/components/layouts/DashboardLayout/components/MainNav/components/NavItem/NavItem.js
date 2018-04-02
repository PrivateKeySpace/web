import React from 'react'
import { Route, Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../../../theme/styles'
import sx from './styles'

const activeClassNames = [tx.fontWeight500, sx.active]

function NavItem (props) {
  const { to, children } = props
  return (
    <Route path={to}>
      {({ match }) =>
        <Link to={to}>
          <div
            className={css(tx.p3, tx.pl4, tx.flex, tx.alignItemsCenter, tx.textTransformUppercase, tx.fontWeight400, sx.wrap, match && activeClassNames)}
          >
            {children}
          </div>
        </Link>
      }
    </Route>
  )
}

export default NavItem

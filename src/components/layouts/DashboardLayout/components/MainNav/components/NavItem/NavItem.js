import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../../../theme/styles'
import sx from './styles'

function NavItem (props) {
  const { to, children } = props
  return (
    <NavLink to={to} activeClassName={css(sx.active)}>
      <div className={css(tx.px3, tx.py1, tx.flex, tx.alignItemsCenter, sx.wrap)}>{children}</div>
    </NavLink>
  )
}

export default NavItem

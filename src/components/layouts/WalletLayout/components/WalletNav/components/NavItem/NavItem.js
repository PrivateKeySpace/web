import React from 'react'
import { Link } from 'react-router-dom'
import { compose, setPropTypes, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import { propTypes } from './lib'
import tx from '../../../../../../../theme/styles'
import sx from './styles'

const activeClassNames = [tx.fontWeight500, sx.active]

const enhance = compose(
  setPropTypes(propTypes),
  pure
)

function NavItem (props) {
  const { to, children, isActive } = props

  return (
    <Link to={to}>
      <div
        className={css(tx.p3, tx.pl4, tx.flex, tx.alignItemsCenter, tx.textTransformUppercase, tx.fontWeight400, sx.wrap, isActive && activeClassNames)}
      >
        {children}
      </div>
    </Link>
  )
}

export default enhance(NavItem)

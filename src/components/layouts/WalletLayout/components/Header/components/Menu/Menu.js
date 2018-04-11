import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withStateHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import classNames from 'classnames'
import { mapDispatch, stateHandlers } from './lib'
import tx from '../../../../../../../theme/styles'
import sx from './styles'
import MenuItem from './components/MenuItem'

const displayName = 'components/layouts/WalletLayout/components/Header/components/Menu'

const enhance = compose(
  setDisplayName(displayName),
  connect(undefined, mapDispatch),
  withStateHandlers(stateHandlers.state, stateHandlers.handlers),
  pure
)

function Menu (props) {
  const { isMenuOpen, toggleMenu, handleSignOut } = props
  return (
    <div onClick={toggleMenu} className={css(tx.flex, tx.alignItemsCenter, tx.justifyContentCenter, tx.px2, tx.ml1, tx.height100, tx.cursorPointer, sx.dropdownButton, isMenuOpen && sx.dropdownButtonActive)}>
      <span className={classNames('lnr lnr-chevron-down', css(sx.icon, isMenuOpen && sx.active))} />
      {
        isMenuOpen &&
        <div className={css(tx.flex, tx.flexDirectionColumn, tx.py2, sx.dropdownMenu)}>
          <MenuItem icon='user'>My Profile</MenuItem>
          <MenuItem icon='exit' onClick={handleSignOut}>Log Out</MenuItem>
        </div>
      }
    </div>
  )
}

export default enhance(Menu)

import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { connect } from 'react-redux'
import { compose, setDisplayName, pure, withHandlers, withState } from 'recompose'
import { css } from 'aphrodite/no-important'
import classNames from 'classnames'
import sx from './styles'
import tx from '../../../../../../../theme/styles'
import { mapDispatch, handlers, stateSpec } from './lib'
import { MenuItem } from './components'

const displayName = 'components/layouts/WalletLayout/components/Header/components/Menu'

const enhance = compose(
  setDisplayName(displayName),
  connect(undefined, mapDispatch),
  ...stateSpec.map(statePropDefinition => withState(...statePropDefinition)),
  withHandlers(handlers),
  onClickOutside,
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

import React from 'react'
import { compose, setDisplayName, mapProps, pure, defaultProps } from 'recompose'
import { withRouter } from 'react-router'
import NavItem from './components/NavItem'
import { mapProps as propsMapper, defaultPropsSpec } from './lib'

const navItems = [
  { name: 'Dashboard', path: '/wallet/dashboard' },
  { name: 'Personal accounts', path: '/wallet/personal' },
  { name: 'Multisig accounts', path: '/wallet/multisig' },
  { name: 'Cosigners', path: '/wallet/cosigners' },
  { name: 'Clients', path: '/wallet/clients' },
  { name: 'Help', path: '/wallet/help' }
]

const displayName = 'components/layouts/WalletLayout/components/WalletNav'

const enhance = compose(
  setDisplayName(displayName),
  withRouter,
  defaultProps(defaultPropsSpec),
  mapProps(propsMapper),
  pure
)

function WalletNav (props) {
  const { activePath } = props

  return <nav>
    {navItems.map(navItem => (
      <NavItem
        key={navItem.path}
        to={navItem.path}
        isActive={navItem.path === activePath}
      >
        {navItem.name}
      </NavItem>
    ))}
  </nav>
}

export default enhance(WalletNav)

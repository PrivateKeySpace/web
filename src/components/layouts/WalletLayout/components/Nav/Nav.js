import React from 'react'
import { compose, setDisplayName, mapProps, pure, defaultProps } from 'recompose'
import { withRouter } from 'react-router'
import { mapProps as propsMapper, defaultPropsSpec } from './lib'
import { Item } from './components'

const navItems = [
  { name: 'Dashboard', path: '/wallet/dashboard' },
  { name: 'Personal accounts', path: '/wallet/personal' },
  { name: 'Multisig accounts', path: '/wallet/multisig' },
  { name: 'Cosigners', path: '/wallet/cosigners' },
  { name: 'Clients', path: '/wallet/clients' },
  { name: 'Help', path: '/wallet/help' }
]

const displayName = 'components/layouts/WalletLayout/components/Nav'

const enhance = compose(
  setDisplayName(displayName),
  withRouter,
  defaultProps(defaultPropsSpec),
  mapProps(propsMapper),
  pure
)

function Nav (props) {
  const { activePath } = props

  return <nav>
    {navItems.map(navItem => (
      <Item
        key={navItem.path}
        to={navItem.path}
        isActive={navItem.path === activePath}
      >
        {navItem.name}
      </Item>
    ))}
  </nav>
}

export default enhance(Nav)

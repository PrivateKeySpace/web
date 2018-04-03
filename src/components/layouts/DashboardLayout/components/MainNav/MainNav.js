import React from 'react'
import { compose, setDisplayName, mapProps, pure } from 'recompose'
import { withRouter } from 'react-router'
import NavItem from './components/NavItem'
import { mapProps as propsMapper } from './lib'

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Personal accounts', path: '/dashboard/personal' },
  { name: 'Multisig accounts', path: '/dashboard/multisig' },
  { name: 'Cosigners', path: '/dashboard/cosigners' },
  { name: 'Clients', path: '/dashboard/clients' },
  { name: 'Help', path: '/dashboard/help' }
]

const displayName = 'components/layouts/DashboardLayout/components/MainNav'

const enhance = compose(
  setDisplayName(displayName),
  withRouter,
  mapProps(propsMapper),
  pure
)

function MainNav (props) {
  const { activePath } = props

  return <div>
    {navItems.map(navItem => (
      <NavItem
        key={navItem.path}
        to={navItem.path}
        isActive={navItem.path === activePath}
      >
        {navItem.name}
      </NavItem>
    ))}
  </div>
}

export default enhance(MainNav)

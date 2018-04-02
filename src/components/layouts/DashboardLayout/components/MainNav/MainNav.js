import React from 'react'
import NavItem from './components/NavItem'

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Personal accounts', path: '/personal' },
  { name: 'Multisig accounts', path: '/multisig' },
  { name: 'Cosigners', path: '/cosigners' },
  { name: 'Clients', path: '/clients' },
  { name: 'Help', path: '/help' }
]

function MainNav (props) {
  return <div>
    {navItems.map(navItem => <NavItem to={navItem.path}>{navItem.name}</NavItem>)}
  </div>
}

export default MainNav

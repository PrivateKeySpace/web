import React from 'react'
import NavItem from './components/NavItem'

function MainNav (props) {
  return <div>
    <NavItem to='/dashboard'>Dashboard</NavItem>
    <NavItem to='/'>Personal accounts</NavItem>
    <NavItem to='/'>Multisig accounts</NavItem>
    <NavItem to='/'>Cosigners</NavItem>
    <NavItem to='/'>Clients</NavItem>
    <NavItem to='/'>Help</NavItem>
  </div>
}

export default MainNav

import React from 'react'
import NavItem from './components/NavItem'

function MainNav (props) {
  return <div>
    <NavItem to='/dashboard'>Dashboard</NavItem>
    <NavItem to='/personal'>Personal accounts</NavItem>
    <NavItem to='/multisig'>Multisig accounts</NavItem>
    <NavItem to='/cosigners'>Cosigners</NavItem>
    <NavItem to='/clients'>Clients</NavItem>
    <NavItem to='/help'>Help</NavItem>
  </div>
}

export default MainNav

const stateHandlers = {
  state: {
    isMenuOpen: false
  },
  handlers: {
    toggleMenu: state => () => ({ isMenuOpen: !state.isMenuOpen }),
    handleSignOut: (_, props) => () => {
      props.signOut()
    }
  }
}

export default stateHandlers

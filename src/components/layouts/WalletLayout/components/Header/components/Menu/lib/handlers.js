const handlers = {
  toggleMenu: props => () => {
    const { setIsMenuOpen, isMenuOpen } = props
    setIsMenuOpen(!isMenuOpen)
  },
  handleSignOut: props => () => {
    props.signOut()
  },
  handleClickOutside: props => () => {
    const { setIsMenuOpen } = props
    setIsMenuOpen(false)
  }
}

export default handlers

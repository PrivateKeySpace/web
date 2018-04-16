const handlers = {
  handleSelectOs: props => event => {
    const { setselectedOs } = props
    setselectedOs(event.target.value)
  }
}

export default handlers

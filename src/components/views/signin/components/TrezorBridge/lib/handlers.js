const handlers = {
  handleSelectOS: props => event => {
    const { setSelectedOS } = props
    setSelectedOS(event.target.value)
  }
}

export default handlers

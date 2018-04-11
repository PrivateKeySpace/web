import stateHandlers from '../stateHandlers'

it('should call signOut prop when handleSignOut handler is called', () => {
  const props = { signOut: jest.fn() }

  stateHandlers.handlers.handleSignOut(undefined, props)()

  expect(props.signOut).toBeCalled()
})

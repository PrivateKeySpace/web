import handlers from '../handlers'

it('should call signOut prop when handleSignOut handler is called', () => {
  const props = { signOut: jest.fn() }

  handlers.handleSignOut(props)()

  expect(props.signOut).toBeCalled()
})

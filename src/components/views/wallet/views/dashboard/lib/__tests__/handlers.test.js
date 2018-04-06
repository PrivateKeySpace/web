import handlers from '../handlers'

it('should call props signOut when handleSignOut is called', () => {
  const props = { signOut: jest.fn() }
  const { handleSignOut } = handlers
  const handler = handleSignOut(props)
  handler()

  expect(props.signOut).toBeCalled()
})

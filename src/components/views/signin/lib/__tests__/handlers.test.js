import handlers from '../handlers'

it('should call props signOut when handleSignOut is called', () => {
  const props = { signIn: jest.fn() }
  const { handleSignIn } = handlers
  const handler = handleSignIn(props)
  handler()

  expect(props.signIn).toBeCalled()
})

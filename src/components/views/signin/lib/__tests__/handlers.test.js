import handlers from '../handlers'

it('should call signIn prop when handleSignIn handler is called', () => {
  const props = { signIn: jest.fn() }

  handlers.handleSignIn(props)()

  expect(props.signIn).toBeCalled()
})

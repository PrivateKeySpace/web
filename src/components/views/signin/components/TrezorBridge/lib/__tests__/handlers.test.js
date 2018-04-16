import handlers from '../handlers'

it('should call setselectedOs prop when handleSelectOs handler is called', () => {
  const props = { setselectedOs: jest.fn() }

  handlers.handleSelectOs(props)({ target: { value: 'test value' } })

  expect(props.setselectedOs).toBeCalled()
})

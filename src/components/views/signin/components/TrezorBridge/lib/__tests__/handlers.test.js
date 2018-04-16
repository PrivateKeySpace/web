import handlers from '../handlers'

it('should call setSelectedOS prop when handleSelectOS handler is called', () => {
  const props = { setSelectedOS: jest.fn() }

  handlers.handleSelectOS(props)({ target: { value: 'test value' } })

  expect(props.setSelectedOS).toBeCalled()
})

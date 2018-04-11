import { StyleSheetTestUtils } from 'aphrodite'
import mapProps from '../mapProps'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('should correctly map props by removing `variant`, `outline` and `link`, and modifying `className`', () => {
  const props = mapProps({ type: 'button', variant: 'success', outline: true })
  expect(props).toHaveProperty('type')
  expect(props).toHaveProperty('className')

  expect(props).not.toHaveProperty('variant')
  expect(props).not.toHaveProperty('outline')
  expect(props).not.toHaveProperty('link')
})

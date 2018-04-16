import { StyleSheetTestUtils } from 'aphrodite'
import mapProps from '../mapProps'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('should correctly map props to default values', () => {
  const props = mapProps({ value: 'test' })
  expect(props).toHaveProperty('className')
})

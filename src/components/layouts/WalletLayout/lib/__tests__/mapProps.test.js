import { StyleSheetTestUtils } from 'aphrodite'
import mapProps from '../mapProps'
import defaultPropsSpec from '../defaultPropsSpec'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('should correctly map props to default values', () => {
  const props = mapProps(defaultPropsSpec)
  expect(props).toHaveProperty('mainContentContainerProps')
  expect(props.mainContentContainerProps).toHaveProperty('className')
})

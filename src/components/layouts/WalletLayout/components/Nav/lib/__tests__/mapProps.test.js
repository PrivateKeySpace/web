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
  expect(mapProps(defaultPropsSpec)).toHaveProperty('activePath', null)
})

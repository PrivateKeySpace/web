import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestReduxProvider } from '../../../../__mocks__'
import View from '../View'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestReduxProvider>
      <View />
    </TestReduxProvider>
  )
  expect(wrapper).toMatchSnapshot()
})

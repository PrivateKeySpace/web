import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestReduxProvider } from '../../../../../../../__mocks__'
import Menu from '../Menu'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const footer = render(
    <TestReduxProvider>
      <Menu />
    </TestReduxProvider>
  )
  expect(footer).toMatchSnapshot()
})

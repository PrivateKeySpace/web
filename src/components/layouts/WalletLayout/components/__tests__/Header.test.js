import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestReduxProvider } from '../../../../../__mocks__'
import Header from '../Header'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const header = render(
    <TestReduxProvider>
      <Header />
    </TestReduxProvider>
  )
  expect(header).toMatchSnapshot()
})

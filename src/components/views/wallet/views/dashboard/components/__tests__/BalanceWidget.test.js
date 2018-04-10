import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import BalanceWidget from '../BalanceWidget'
import { TestRouter } from '../../../../../../../__mocks__'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const widget = render(
    <TestRouter>
      <BalanceWidget />
    </TestRouter>
  )
  expect(widget).toMatchSnapshot()
})

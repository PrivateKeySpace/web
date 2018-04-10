import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../../../../__mocks__'
import Nav from '../Nav'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const nav = render(
    <TestRouter path='/wallet/dashboard'>
      <Nav />
    </TestRouter>
  )
  expect(nav).toMatchSnapshot()
})

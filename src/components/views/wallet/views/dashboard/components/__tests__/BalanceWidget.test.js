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
      <BalanceWidget title='Test title' icon='briefcase' link={{ to: '/test', text: 'Test Link' }} />
    </TestRouter>
  )
  expect(widget).toMatchSnapshot()
})

it('renders without icon, does not crash and matches snapshot', () => {
  const widget = render(
    <TestRouter>
      <BalanceWidget title='Test title' link={{ to: '/test', text: 'Test Link' }} />
    </TestRouter>
  )
  expect(widget).toMatchSnapshot()
})

it('renders without icon and without link, does not crash and matches snapshot', () => {
  const widget = render(
    <TestRouter>
      <BalanceWidget title='Test title' />
    </TestRouter>
  )
  expect(widget).toMatchSnapshot()
})

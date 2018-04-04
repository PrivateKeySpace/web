import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestReduxProvider, TestRouter } from '../../../../__mocks__'
import Router from '../Router'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestReduxProvider>
      <TestRouter path='/wallet'>
        <Router />
      </TestRouter>
    </TestReduxProvider>
  )
  expect(wrapper).toMatchSnapshot()
})

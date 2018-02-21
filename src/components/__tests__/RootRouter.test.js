import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../__mocks__'
import RootRouter from '../RootRouter'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter>
      <RootRouter />
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

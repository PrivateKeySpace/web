import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import BaseLayout from '../BaseLayout'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const wrapper = render(
    <BaseLayout
      mainContent={<div>test main content</div>}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

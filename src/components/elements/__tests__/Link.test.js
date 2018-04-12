import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../../__mocks__'
import Link from '../Link'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const link = render(
    <TestRouter path='/'>
      <Link to='/test'>Test link</Link>
    </TestRouter>
  )
  expect(link).toMatchSnapshot()
})

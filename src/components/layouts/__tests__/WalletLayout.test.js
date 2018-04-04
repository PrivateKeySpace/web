import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../../__mocks__'
import WalletLayout from '../WalletLayout'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/wallet'>
      <WalletLayout
        topBarContent={
          'Test top bar'
        }
        headerContent={
          <h1>
          Test header
          </h1>
        }
        mainContent={
          <div>
            Test main content
          </div>
        }
      />
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

it('renders correctly with no top bar defined, does not crash and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/wallet'>
      <WalletLayout
        headerContent={
          <h1>
          Test header
          </h1>
        }
        mainContent={
          <div>
            Test main content
          </div>
        }
      />
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

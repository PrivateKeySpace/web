import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../../__mocks__'
import DashboardLayout from '../DashboardLayout'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/dashboard'>
      <DashboardLayout
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
    <TestRouter path='/dashboard'>
      <DashboardLayout
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

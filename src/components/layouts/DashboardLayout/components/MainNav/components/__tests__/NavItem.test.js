import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../../../../../../__mocks__'
import NavItem from '../NavItem'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders not active NavItem without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/'>
      <NavItem
        to='/testRoute'
        isActive={false}
      >
        Test Item
      </NavItem>
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

it('renders active NavItem without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/'>
      <NavItem
        to='/testRoute'
        isActive
      >
        Test Item
      </NavItem>
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

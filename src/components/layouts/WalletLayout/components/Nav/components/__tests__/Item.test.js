import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { TestRouter } from '../../../../../../../__mocks__'
import Item from '../Item'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders not active Item without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/'>
      <Item
        to='/testRoute'
        isActive={false}
      >
        Test Item
      </Item>
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

it('renders active Item without crashing and matches snapshot', () => {
  const wrapper = render(
    <TestRouter path='/'>
      <Item
        to='/testRoute'
        isActive
      >
        Test Item
      </Item>
    </TestRouter>
  )
  expect(wrapper).toMatchSnapshot()
})

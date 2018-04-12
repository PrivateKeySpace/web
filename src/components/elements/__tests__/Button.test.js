import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { variants } from '../../../theme/constants'
import Button from '../Button'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders default style buttons of all variants without crashing and matches snapshot', () => {
  for (const variant of variants) {
    const button = render(
      <Button variant={variant}>Test Button</Button>
    )
    expect(button).toMatchSnapshot()
  }
})

it('renders disabled default style buttons of all variants without crashing and matches snapshot', () => {
  for (const variant of variants) {
    const button = render(
      <Button variant={variant} disabled>Test Button</Button>
    )
    expect(button).toMatchSnapshot()
  }
})

it('renders outline style buttons of all variants without crashing and matches snapshot', () => {
  for (const variant of variants) {
    const button = render(
      <Button variant={variant} outline>Test Button</Button>
    )
    expect(button).toMatchSnapshot()
  }
})

it('renders link style buttons of all variants without crashing and matches snapshot', () => {
  for (const variant of variants) {
    const button = render(
      <Button variant={variant} link>Test Button</Button>
    )
    expect(button).toMatchSnapshot()
  }
})

it('renders round style buttons of all variants without crashing and matches snapshot', () => {
  for (const variant of variants) {
    const button = render(
      <Button variant={variant} round>
        <span className='lnr lnr-alarm' />
      </Button>
    )
    expect(button).toMatchSnapshot()
  }
})

it('renders round ouline style buttons of all variants without crashing and matches snapshot', () => {
  for (const variant of variants) {
    const button = render(
      <Button variant={variant} round outline>
        <span className='lnr lnr-alarm' />
      </Button>
    )
    expect(button).toMatchSnapshot()
  }
})

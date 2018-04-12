import React from 'react'
import { StyleSheetTestUtils } from 'aphrodite'
import { render } from 'enzyme'
import { variants } from '../../../theme/constants'
import Alert from '../Alert'
import Button from '../Button'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection()
})

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
})

it('renders alerts of all variants with no controls, does not crash and matches snapshot', () => {
  for (const variant of variants) {
    const alert = render(
      <Alert variant={variant} text='Test alert' />
    )
    expect(alert).toMatchSnapshot()
  }
})

it('renders alerts of all variants with multiple controls, does not crash and matches snapshot', () => {
  for (const variant of variants) {
    const alert = render(
      <Alert
        variant={variant}
        text='Test alert'
        controls={[
          <Button variant='danger'>Close</Button>,
          <Button variant='info'>Accept</Button>
        ]}
      />
    )
    expect(alert).toMatchSnapshot()
  }
})

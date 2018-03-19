import React from 'react'
import PropTypes from 'prop-types'
import { MemoryRouter } from 'react-router'
import { compose, setDisplayName, setPropTypes, defaultProps } from 'recompose'

const displayName = '__mocks__/TestRouter'

const enhance = compose(
  setDisplayName(displayName),
  setPropTypes({ path: PropTypes.string, children: PropTypes.any }),
  defaultProps({ path: '/' })
)

function TestRouter (props) {
  const { path, children } = props

  return (
    <MemoryRouter initialEntries={[path]} initialIndex={0}>
      {children}
    </MemoryRouter>
  )
}

export default enhance(TestRouter)

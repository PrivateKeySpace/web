import React from 'react'
import { compose, setDisplayName, setPropTypes, defaultProps, mapProps, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import { defaultPropsSpec, propTypes, mapProps as propsMapper } from './lib'
import sx from './styles'

const displayName = 'components/layouts/BaseLayout'

const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  defaultProps(defaultPropsSpec),
  mapProps(propsMapper),
  pure
)

function Layout (props) {
  const {
    mainContent,
    mainContentContainerProps
  } = props
  return (
    <div className={css(tx.flex, tx.flexDirectionColumn, sx.container)}>
      <div {...mainContentContainerProps}>
        {mainContent}
      </div>
    </div>
  )
}

export default enhance(Layout)

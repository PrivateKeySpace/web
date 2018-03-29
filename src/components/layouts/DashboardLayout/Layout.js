import React from 'react'
import { compose, setDisplayName, setPropTypes, defaultProps, mapProps, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import BaseLayout from '../BaseLayout'
import { defaultPropsSpec, propTypes, mapProps as propsMapper } from './lib'
import tx from '../../../theme/styles'
import sx from './styles'
import MainNav from './components/MainNav'

const displayName = 'components/layouts/DashboardLayout'

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
    <BaseLayout mainContent={
      <div className={css(tx.flex, tx.flexDirectionRow, sx.container)}>
        <div className={css(sx.navContainer)}>
          <MainNav />
        </div>
        <div {...mainContentContainerProps}>
          {mainContent}
        </div>
      </div>
    } />
  )
}

export default enhance(Layout)

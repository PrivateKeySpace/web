import React from 'react'
import { compose, setDisplayName, setPropTypes, defaultProps, mapProps, pure } from 'recompose'
import { css } from 'aphrodite/no-important'
import { defaultPropsSpec, propTypes, mapProps as propsMapper } from './lib'
import tx from '../../../theme/styles'
import { Nav, Header } from './components'
import sx from './styles'

const displayName = 'components/layouts/WalletLayout'

const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  defaultProps(defaultPropsSpec),
  mapProps(propsMapper),
  pure
)

function Layout (props) {
  const {
    topBarContent,
    headerContent,
    mainContent,
    mainContentContainerProps
  } = props
  return (
    <div className={css(tx.flex, tx.flexDirectionColumn, sx.container)}>
      <div className={css(tx.fontWeight500, sx.topBarContainer)}>
        {topBarContent}
      </div>
      <div className={css(tx.flex, tx.flexGrow1, tx.flexDirectionRow, tx.width100)}>
        <div className={css(sx.navContainer)}>
          <Nav />
        </div>
        <div className={css(tx.flexGrow1, sx.mainContainer)}>
          <Header
            headerContent={headerContent}
          />
          <div {...mainContentContainerProps}>
            {mainContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default enhance(Layout)

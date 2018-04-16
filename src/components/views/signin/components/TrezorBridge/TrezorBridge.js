import React from 'react'
import { compose, setDisplayName, pure, withState, withHandlers } from 'recompose'
import { css } from 'aphrodite/no-important'
import Select from '../../../../elements/Select'
import tx from '../../../../../theme/styles'
import sx from './styles'
import { stateSpec, handlers } from './lib'
import { DownloadButton } from './components'

const displayName = 'components/views/signin/components/TrezorBridge'

const enhance = compose(
  setDisplayName(displayName),
  ...stateSpec.map(statePropDefinition => withState(...statePropDefinition)),
  withHandlers(handlers),
  pure
)

function TrezorBridge (props) {
  const { hidden, selectedOS, handleSelectOS } = props

  return (
    <div className={css(tx.pt4, tx.pb3, tx.textAlignCenter, hidden && tx.hidden, sx.trezorBridge)}>
      <div className={css(tx.fontSize1, tx.textTransformUppercase)}>Trezor Bridge not installed</div>
      <div className={css(tx.fontSize3, tx.textTransformUppercase, tx.mb3)}>New communication tool to facilitate the connection between your TREZOR and your internet browser.</div>
      <div>
        <Select onChange={handleSelectOS} value={selectedOS}>
          <option value='windows'>Windows</option>
          <option value='macos'>macOS</option>
          <option value='linux'>Linux</option>
        </Select>
        <DownloadButton />
      </div>
    </div>
  )
}

export default enhance(TrezorBridge)

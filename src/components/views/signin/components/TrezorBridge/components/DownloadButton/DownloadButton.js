import React from 'react'
import { css } from 'aphrodite/no-important'
import tx from '../../../../../../../theme/styles'
import sx from './styles'

function DownloadButton () {
  return (
    <button className={css(tx.p0, tx.ml1, tx.textTransformUppercase, sx.button)}>Download</button>
  )
}

export default DownloadButton

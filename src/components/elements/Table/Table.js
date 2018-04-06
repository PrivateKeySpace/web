import React from 'react'
import { css } from 'aphrodite/no-important'
import tx from '../../../theme/styles'
import sx from './styles'

const columns = ['Date', 'Status', 'Created By', 'To', 'Amount', 'Reason']

function Table (props) {
  const { noDataMessage } = props

  return (
    <table className={css(tx.width100, sx.table)}>
      <thead>
        <tr>
          {columns.map(column => <th key={column} className={css(tx.fontWeight400, tx.textAlignLeft, tx.textTransformUppercase, tx.px2, sx.th)}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {/* {Array(10).fill(0).map(() =>
          <tr>
            {columns.map(column => <td className={css(tx.px2, sx.td)}>{column}</td>)}
          </tr>
        )} */}
        <tr>
          <td colSpan={columns.length}>
            <div className={css(tx.width100, tx.flex, tx.justifyContentCenter, tx.alignItemsCenter, tx.textTransformUppercase, tx.fontWeight400, sx.noRows)}>
              {noDataMessage}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table

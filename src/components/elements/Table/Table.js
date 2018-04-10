import React from 'react'
import { compose, setDisplayName, setPropTypes, defaultProps } from 'recompose'
import { css } from 'aphrodite/no-important'
import { propTypes, defaultPropsSpec } from './lib'
import tx from '../../../theme/styles'
import sx from './styles'

const displayName = 'components/elements/Table'
const enhance = compose(
  setDisplayName(displayName),
  setPropTypes(propTypes),
  defaultProps(defaultPropsSpec)
)

function renderColumnsRow (columns) {
  const columnElements = columns.map(column =>
    <th
      key={column.key}
      className={css(tx.fontWeight400, tx.textAlignLeft, tx.textTransformUppercase, tx.px2, sx.th)}
    >
      {column.name}
    </th>
  )

  return (
    <tr>
      {columnElements}
    </tr>
  )
}

function renderDataRows (columns, data) {
  return data.map((item, index) => {
    const rowKey = item.id || index

    return (
      <tr key={rowKey}>
        {
          columns.map(({ key: columnKey }) =>
            <td key={`${rowKey}_${columnKey}`} className={css(tx.px2, tx.py4, sx.td)}>
              {item[columnKey]}
            </td>
          )
        }
      </tr>
    )
  })
}

function renderEmptyMessageRow (columns, emptyMessage) {
  return (
    <tr>
      <td colSpan={columns.length}>
        <div className={css(tx.width100, tx.flex, tx.justifyContentCenter, tx.alignItemsCenter, tx.textTransformUppercase, tx.fontWeight400, sx.noRows)}>
          {emptyMessage}
        </div>
      </td>
    </tr>
  )
}

function Table (props) {
  const { columns, data, emptyMessage } = props

  return (
    <table className={css(tx.width100, sx.table)}>
      <thead>
        {renderColumnsRow(columns)}
      </thead>
      <tbody>
        {data.length > 0 ? renderDataRows(columns, data) : renderEmptyMessageRow(columns, emptyMessage)}
      </tbody>
    </table>
  )
}

export default enhance(Table)

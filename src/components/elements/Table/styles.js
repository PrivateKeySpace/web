import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../theme/constants'

const styles = StyleSheet.create({
  table: {
    borderCollapse: 'collapse',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGray,
    background: colors.white
  },
  th: {
    backgroundColor: colors.lightBg,
    color: colors.gray,
    fontSize: 12,
    height: 26,
    lineHeight: '26px',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.lightGray
  },
  td: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGray,
    borderLeft: 'none',
    borderRight: 'none'
  },
  noRows: {
    color: colors.gray,
    fontSize: 12,
    height: 75
  }
})

export default styles

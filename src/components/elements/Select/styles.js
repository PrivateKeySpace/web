import { StyleSheet } from 'aphrodite/no-important'
import { colors, fontFamilies } from '../../../theme/constants'

const styles = StyleSheet.create({
  selectWrap: {
    position: 'relative',
    cursor: 'pointer'
  },
  select: {
    appearance: 'none',
    fontSize: 14,
    fontFamily: fontFamilies.primary,
    backgroundColor: colors.white,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderStyle: 'solid',
    minWidth: 150,
    height: 32,
    cursor: 'pointer',
    outline: 'none'
  },
  arrow: {
    position: 'absolute',
    top: 0,
    right: 10,
    height: 32,
    paddingTop: 2,
    color: '#999999',
    fontSize: 10,
    lineHeight: '32px',
    cursor: 'pointer',
    pointerEvents: 'none'
  }
})

export default styles

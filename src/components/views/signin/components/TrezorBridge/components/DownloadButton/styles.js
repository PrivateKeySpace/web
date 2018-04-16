import { StyleSheet } from 'aphrodite/no-important'
import { colors, fontFamilies } from '../../../../../../../theme/constants'

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkBg,
    border: 'none',
    borderRadius: 3,
    color: colors.white,
    cursor: 'pointer',
    fontFamily: fontFamilies.primary,
    fontSize: 13,
    height: 32,
    width: 130
  }
})

export default styles

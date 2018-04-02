import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../../../../../theme/constants'

const styles = StyleSheet.create({
  wrap: {
    height: 55,
    textTransform: 'uppercase',
    color: colors.gray,
    ':hover': {
      backgroundColor: colors.lightBg
    }
  },

  active: {
    position: 'relative',
    backgroundColor: colors.lightBg,
    color: colors.black,

    ':before': {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      height: '100%',
      backgroundColor: colors.danger,
      content: "''"
    }
  }
})

export default styles

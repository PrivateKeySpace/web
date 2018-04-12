import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../../../../../../../theme/constants'

const styles = StyleSheet.create({
  menuItem: {
    height: 34,
    color: '#999999',
    ':hover': {
      color: colors.white
    }
  },

  menuItemText: {
    fontSize: 14
  }
})

export default styles

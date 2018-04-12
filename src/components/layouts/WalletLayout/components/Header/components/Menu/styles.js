import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../../../../../theme/constants'

const styles = StyleSheet.create({
  dropdownButton: {
    position: 'relative',
    width: 32,
    userSelect: 'none'
  },
  icon: {
    color: colors.white,
    opacity: 0.5,
    ':hover': {
      opacity: 1
    }
  },
  iconActive: {
    opacity: 1
  },
  dropdownButtonActive: {
    backgroundColor: '#131a1e'
  },
  dropdownMenu: {
    cursor: 'default',
    backgroundColor: '#131a1e',
    width: 165,
    position: 'absolute',
    top: '100%',
    right: 0
  }
})

export default styles

import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../theme/constants'

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    backgroundColor: colors.white
  },
  topBarContainer: {
    backgroundColor: colors.danger,
    height: 30,
    lineHeight: '30px',
    textAlign: 'center',
    color: colors.white,
    textTransform: 'uppercase'
  },
  navContainer: {
    width: 225,
    height: '100%'
  },
  mainContainer: {
    backgroundColor: '#f3f3f3'
  }
})

export default styles

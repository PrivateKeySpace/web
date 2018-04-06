import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../theme/constants'

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    backgroundColor: colors.white
  },
  topBarContainer: {
    height: 30,
    backgroundColor: colors.danger,
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: '30px'
  },
  navContainer: {
    width: 220,
    height: '100%'
  },
  mainContainer: {
    backgroundColor: '#f3f3f3'
  }
})

export default styles

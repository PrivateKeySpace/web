import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../../../theme/constants'

const styles = StyleSheet.create({
  container: {
    height: 175,
    backgroundColor: colors.darkBg,
    color: colors.white
  },
  navbar: {
    height: 36
  },
  walletName: {
    textTransform: 'uppercase'
  },
  notifications: {
    marginLeft: 'auto'
  },
  separator: {
    width: 1,
    height: '75%',
    backgroundColor: colors.gray
  },
  deviceInfo: {
    alignItems: 'flex-end'
  },
  headerContent: {
    marginTop: 'auto'
  }
})

export default styles

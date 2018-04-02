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
  deviceName: {
    color: colors.white,
    fontSize: 14
  },
  deviceStatus: {
    color: colors.gray,
    fontSize: 10
  },
  dropdownButton: {
    color: colors.gray
  },
  headerContent: {
    marginTop: 'auto'
  }
})

export default styles

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
  pullRight: {
    marginLeft: 'auto'
  },
  notifications: {
    position: 'relative'
  },
  notificationCounterWrap: {
    position: 'absolute',
    bottom: -5,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  notificationCounter: {
    backgroundColor: colors.danger,
    width: 16,
    height: 16,
    borderRadius: 16,
    margin: 2,
    fontSize: 10,
    lineHeight: '10px'
  },
  separator: {
    width: 1,
    height: '75%',
    backgroundColor: colors.gray
  },
  deviceName: {
    color: colors.white,
    fontSize: 14
  },
  deviceStatus: {
    color: colors.white,
    opacity: 0.5,
    fontSize: 10
  },
  dropdownButton: {
    color: colors.white,
    opacity: 0.5
  },
  content: {
    marginTop: 'auto'
  }
})

export default styles

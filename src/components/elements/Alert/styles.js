import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../theme/constants'

const styles = StyleSheet.create({
  alert: {
    height: 48,
    fontSize: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGray,
    borderLeftWidth: 3
  },
  danger: {
    borderColor: colors.danger,
    backgroundColor: colors.lightDanger
  },
  success: {
    borderColor: colors.success,
    backgroundColor: colors.lightSuccess
  },
  warning: {
    borderColor: colors.warning,
    backgroundColor: colors.lightWarning
  },
  info: {
    borderColor: colors.info,
    backgroundColor: colors.lightInfo
  },
  controls: {
    marginLeft: 'auto'
  }
})

export default styles

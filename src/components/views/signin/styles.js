import { StyleSheet } from 'aphrodite/no-important'
import { darken } from 'polished'
import { colors } from '../../../theme/constants'

const styles = StyleSheet.create({
  signInWrap: {
    minHeight: '100vh'
  },
  header: {
    position: 'relative',
    backgroundColor: colors.darkBg,
    color: colors.white,
    minHeight: 400
  },
  title: {
    fontSize: 38
  },
  subtitle: {
    fontSize: 14,
    width: 400
  },
  separator: {
    height: 1,
    width: 86,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: colors.gray
  },
  getTrezor: {
    fontSize: 14,
    marginBottom: 75
  },
  getTrezorLink: {
    fontSize: 14,
    lineHeight: 'normal',
    color: colors.info,
    cursor: 'pointer',
    ':hover': {
      color: darken(0.1, colors.info),
      textDecoration: 'underline'
    }
  },
  connectTrezor: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 50%)',
    width: 400,
    height: 115,
    backgroundColor: colors.success,
    borderRadius: 115,
    cursor: 'pointer',
    userSelect: 'none'
  },
  trezorLogo: {
    width: 85,
    height: 85,
    borderRadius: '50%'
  },
  trezorMessage: {
    paddingRight: 50
  },
  mainMessage: {
    fontSize: 35
  },
  subMessage: {
    fontSize: 24
  },
  insertHint: {
    marginTop: 80,
    color: colors.gray
  }
})

export default styles

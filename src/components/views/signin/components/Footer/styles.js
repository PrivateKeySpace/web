import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../../../theme/constants'

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 'auto'
  },
  footer: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: colors.lightGray,
    color: colors.lightGray
  }
})

export default styles

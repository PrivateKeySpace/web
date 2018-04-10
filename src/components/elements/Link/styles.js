import { StyleSheet } from 'aphrodite/no-important'
import { colors } from '../../../theme/constants'
import { darken } from 'polished'

const styles = StyleSheet.create({
  link: {
    color: colors.info,
    cursor: 'pointer',
    ':hover': {
      color: darken(0.1, colors.info)
    }
  }
})

export default styles

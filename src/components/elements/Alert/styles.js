import { StyleSheet } from 'aphrodite/no-important'
import { tint } from 'polished'
import { colors, variants } from '../../../theme/constants'

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
  controls: {
    marginLeft: 'auto'
  },
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      borderColor: colors[variant],
      backgroundColor: tint(0.1, colors[variant])
    }
    return acc
  }, {})
})

export default styles

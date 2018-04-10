import { StyleSheet } from 'aphrodite/no-important'
import { darken } from 'polished'
import { colors, variants } from '../../../theme/constants'

const buttonHeight = 38

const buttonStyle = {
  height: buttonHeight,
  borderRadius: buttonHeight,
  fontSize: 13,
  cursor: 'pointer',
  userSelect: 'none',
  outline: 'none',
  paddingLeft: 16,
  paddingRight: 16
}

export const defaultSx = StyleSheet.create({
  button: {
    ...buttonStyle,
    backgroundColor: colors.lightGray,
    border: 'none',
    color: colors.black
  },
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      color: colors.white,
      backgroundColor: colors[variant],
      ':hover': {
        backgroundColor: darken(0.1, colors[variant])
      },
      ':active': {
        backgroundColor: darken(0.15, colors[variant])
      }
    }
    return acc
  }, {})
})

export const outlineSx = StyleSheet.create({
  button: {
    ...buttonStyle,
    background: 'transparent',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.black,
    color: colors.black,
    paddingLeft: 14,
    paddingRight: 14
  },
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      borderColor: colors[variant],
      color: colors[variant],
      ':hover': {
        borderColor: darken(0.1, colors[variant]),
        backgroundColor: darken(0.1, colors[variant]),
        color: colors.white
      },
      ':active': {
        borderColor: darken(0.15, colors[variant]),
        backgroundColor: darken(0.15, colors[variant]),
        color: colors.white
      }
    }
    return acc
  }, {})
})

export const linkSx = StyleSheet.create({
  button: {
    ...buttonStyle,
    background: 'transparent',
    border: 'none',
    color: colors.black
  },
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      color: colors[variant],
      ':hover': {
        color: darken(0.1, colors[variant])
      },
      ':active': {
        color: darken(0.15, colors[variant])
      }
    }
    return acc
  }, {})
})

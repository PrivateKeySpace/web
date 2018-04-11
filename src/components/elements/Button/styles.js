import { StyleSheet } from 'aphrodite/no-important'
import { darken } from 'polished'
import { colors, variants } from '../../../theme/constants'

const buttonHeight = 38

const buttonStyle = {
  height: buttonHeight,
  minWidth: 38,
  borderRadius: buttonHeight,
  lineHeight: `${buttonHeight}px`,
  fontSize: 13,
  cursor: 'pointer',
  userSelect: 'none',
  outline: 'none',
  paddingLeft: 16,
  paddingRight: 16,
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
}

const roundButtonStyle = {
  width: 38,
  paddingLeft: 1,
  paddingRight: 0
}

export const defaultSx = StyleSheet.create({
  button: {
    ...buttonStyle,
    backgroundColor: colors.lightGray,
    border: 'none',
    color: colors.black
  },
  round: roundButtonStyle,
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      color: colors.white,
      backgroundColor: colors[variant],
      ':hover:enabled': {
        backgroundColor: darken(0.08, colors[variant])
      },
      ':active:enabled': {
        backgroundColor: darken(0.12, colors[variant])
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
  round: roundButtonStyle,
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      borderColor: colors[variant],
      color: colors[variant],
      ':hover:enabled': {
        borderColor: darken(0.08, colors[variant]),
        backgroundColor: darken(0.08, colors[variant]),
        color: colors.white
      },
      ':active:enabled': {
        borderColor: darken(0.12, colors[variant]),
        backgroundColor: darken(0.12, colors[variant]),
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
  round: roundButtonStyle,
  ...variants.reduce((acc, variant) => {
    acc[variant] = {
      color: colors[variant],
      ':hover:enabled': {
        color: darken(0.08, colors[variant])
      },
      ':active:enabled': {
        color: darken(0.12, colors[variant])
      }
    }
    return acc
  }, {})
})

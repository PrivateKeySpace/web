import { getMediaQueries } from './helpers'

export const breakpoints = {
  xs: 500,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1400
}

export const mediaQueries = getMediaQueries(breakpoints)

export const scale = [0, 5, 10, 15, 20, 25]

export const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: '#666666',
  lightGray: '#d6d6d6',
  darkBg: '#323a3e',
  lightBg: '#f3f3f3',
  danger: '#f45c3e',
  lightDanger: '#feefec',
  warning: '#fcca60',
  lightWarning: '#fffaef',
  success: '#75ad12',
  lightSuccess: '#f1f7e7',
  info: '#3ba6d8',
  lightInfo: '#ebf6fb'
}

export const fontSizes = [38, 18, 15]
export const lineHeights = [46, 22, 18]

export const letterSpacings = []

export const fontFamilies = { primary: 'Rubik, Helvetica, Segoe UI, sans-serif' }

export const borderColor = colors.black
export const borderWidth = 1
export const borderStyle = 'solid'
export const borderRadius = 5

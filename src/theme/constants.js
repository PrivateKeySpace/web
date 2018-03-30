import { getMediaQueries } from './helpers'

export const breakpoints = {
  xs: 500,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1400
}

export const mediaQueries = getMediaQueries(breakpoints)

export const scale = [0, 5, 10, 15, 25]

export const colors = {
  black: '#000000',
  white: '#ffffff',
  gray: '#53595d',
  darkGray: '#323a3e',
  lightGray: '#acaeb0'
}

export const fontSizes = []
export const lineHeights = []

export const letterSpacings = []

export const fontFamilies = ['-apple-system, Helvetica, Segoe UI, sans-serif']

export const borderColor = colors.black
export const borderWidth = 1
export const borderStyle = 'solid'
export const borderRadius = 5

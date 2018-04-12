import 'typeface-rubik'
import 'linearicons'

import { aphroditeGlobal, GLOBAL_STYLES_SELECTOR } from './helpers'
import { mediaQueries, fontFamilies, colors, fontSizes, lineHeights } from './constants'

const headings = {}
fontSizes.forEach((fontSize, index) => {
  headings[`h${index + 1}`] = {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeights[index]}px`
  }
})

const stylesGlobal = aphroditeGlobal.StyleSheet.create({
  [GLOBAL_STYLES_SELECTOR]: {
    '*': {
      boxSizing: 'border-box'
    },
    '*:disabled': {
      cursor: 'not-allowed'
    },
    'html, body': {
      margin: 0,
      padding: 0,
      fontFamily: fontFamilies.primary,
      color: colors.black,
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 15,
      backgroundColor: colors.white,
      [mediaQueries.print]: {
        '-webkit-print-color-adjust': 'exact'
      }
    },
    ...headings,
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
      padding: 0,
      fontStyle: 'normal',
      fontWeight: 400,
      fontFamily: fontFamilies.primary
    },
    a: {
      textDecoration: 'none'
    },
    p: {
      margin: 0
    },
    ul: {
      margin: 0,
      paddingLeft: 0,
      listStyleType: 'none'
    }
  }
})

aphroditeGlobal.css(stylesGlobal[GLOBAL_STYLES_SELECTOR])

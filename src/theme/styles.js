import './stylesGlobal'
import { StyleSheet } from 'aphrodite/no-important'
import { mediaQuerizeUtil } from './helpers'
import { breakpoints, mediaQueries, borderStyle, borderColor, borderWidth, borderRadius, scale, colors,
  fontFamilies, fontSizes, lineHeights } from './constants'

let stylesSpec = {}

stylesSpec.inlineFlex = { display: 'inline-flex' }
stylesSpec.flex = { display: 'flex' }
stylesSpec.flexWrap = { flexWrap: 'wrap' }
stylesSpec.flexDirectionColumn = { flexDirection: 'column' }
stylesSpec.flexDirectionRow = { flexDirection: 'row' }
stylesSpec.flexGrow1 = { flexGrow: 1 }
stylesSpec.flexShrink1 = { flexShrink: 1 }
stylesSpec.flexGrow0 = { flexGrow: 0 }
stylesSpec.flexShrink0 = { flexShrink: 0 }
stylesSpec.alignItemsCenter = { alignItems: 'center' }
stylesSpec.alignItemsFlexEnd = { alignItems: 'flex-end' }
stylesSpec.alignItemsFlexStart = { alignItems: 'flex-start' }
stylesSpec.justifyContentCenter = { justifyContent: 'center' }
stylesSpec.justifyContentSpaceAround = { justifyContent: 'space-around' }
stylesSpec.justifyContentSpaceBetween = { justifyContent: 'space-between' }
stylesSpec.justifyContentFlexStart = { justifyContent: 'flex-start' }
stylesSpec.justifyContentFlexEnd = { justifyContent: 'flex-end' }

stylesSpec.width100 = { width: '100%' }
stylesSpec.height100 = { height: '100%' }

/*
.fontFamily{0-1}
 */
{
  const fontFamiliesNames = Object.keys(fontFamilies)
  fontFamiliesNames.forEach(fontFamilyName => {
    stylesSpec[`fontFamily${fontFamilyName}`] = { fontFamily: fontFamilies[fontFamilyName] }
  })
}

/*
.fontWeight{100-900}
 */
{
  const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
  fontWeights.forEach(fontWeight => {
    stylesSpec[`fontWeight${fontWeight}`] = { fontWeight }
  })
}

/*
.fontSize{0-7}
.fontSize{0-7}_{xs|sm|md|lg|xl}
 */
fontSizes.forEach((fontSize, index) => {
  const props = {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeights[index]}px`
  }

  stylesSpec[`fontSize${index}`] = props
  stylesSpec = mediaQuerizeUtil(stylesSpec, props, breakpointName => `fontSize${index}_${breakpointName}`)
})

stylesSpec.textAlignCenter = { textAlign: 'center' }
stylesSpec.textAlignLeft = { textAlign: 'left' }
stylesSpec.textAlignRight = { textAlign: 'right' }
stylesSpec.textTransformUppercase = { textTransform: 'uppercase' }

stylesSpec.displayBlock = { display: 'block' }
stylesSpec.displayInlineBlock = { display: 'inline-block' }

stylesSpec.overflowHidden = { overflow: 'hidden' }

stylesSpec.hidden = { display: 'none' }

/*
.{hidden|visible}_{xs|sm|md|lg|xl}
 */
{
  const breakpointsNames = Object.keys(breakpoints)
  breakpointsNames.forEach(breakpointName => {
    stylesSpec[`hidden_${breakpointName}`] = { [mediaQueries[`max_${breakpointName}`]]: { display: 'none' } }
    stylesSpec[`visible_${breakpointName}`] = { [mediaQueries[`max_${breakpointName}`]]: { display: 'inherit' } }
  })
}

stylesSpec.hidden_print = { [mediaQueries.print]: { display: 'none' } }

stylesSpec.cursorPointer = { cursor: 'pointer' }

stylesSpec.cursorMove = { cursor: 'move' }

/*
.col{1-12}
.col{1-12}_{xs|sm|md|lg|xl}
 */
{
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  cols.forEach(col => {
    const props = { width: `${(col / cols.length) * 100}%` }

    stylesSpec[`col${col}`] = props
    stylesSpec = mediaQuerizeUtil(stylesSpec, props, breakpointName => `col${col}_${breakpointName}`)
  })
}

stylesSpec.border = { borderWidth: `${borderWidth}px`, borderStyle, borderColor }
stylesSpec.noBorder = { borderStyle: 'none' }
stylesSpec.borderRadius = { borderRadius }

/*
.border{Top|Right|Bottom|Left}Width
.border{Top|Right|Bottom|Left}Style
.border{Top|Right|Bottom|Left}Color
 */
{
  const directions = ['Top', 'Right', 'Bottom', 'Left']
  directions.forEach(direction => {
    stylesSpec[`border${direction}`] = {
      [`border${direction}Width`]: `${borderWidth}px`,
      [`border${direction}Style`]: borderStyle,
      [`border${direction}Color`]: borderColor
    }
  })
}

/*
.borderColor_{color}
.backgroundColor_{color}
.color_{color}
 */
{
  const propColorList = ['borderColor', 'backgroundColor', 'color']
  Object.keys(colors).forEach(color => {
    propColorList.forEach(prop => {
      stylesSpec[`${prop}_${color}`] = { [prop]: colors[color] }
    })
  })
}

/*
.{m|p}{t|r|b|l|x|y}{0-4}_{xs|sm|md|lg|xl}
 */
{
  const marginPropsKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my']
  const paddingPropsKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py']

  function keyToScaleProp (propName, scaleIndex, scale) {
    return (
      (typeof scaleIndex === 'number')
        ? { [propName]: `${scale[scaleIndex]}px` }
        : null
    )
  }

  function keysToMarginScaleProps (keys, scale) {
    const { m, mt, mb, my, ml, mr, mx } = keys
    return {
      ...keyToScaleProp('margin', m, scale),
      ...keyToScaleProp('marginTop', mt, scale),
      ...keyToScaleProp('marginBottom', mb, scale),
      ...keyToScaleProp('marginTop', my, scale),
      ...keyToScaleProp('marginBottom', my, scale),
      ...keyToScaleProp('marginLeft', ml, scale),
      ...keyToScaleProp('marginRight', mr, scale),
      ...keyToScaleProp('marginLeft', mx, scale),
      ...keyToScaleProp('marginRight', mx, scale)
    }
  }

  function keysToPaddingScaleProps (keys, scale) {
    const { p, pt, pb, py, pl, pr, px } = keys
    return {
      ...keyToScaleProp('padding', p, scale),
      ...keyToScaleProp('paddingTop', pt, scale),
      ...keyToScaleProp('paddingBottom', pb, scale),
      ...keyToScaleProp('paddingTop', py, scale),
      ...keyToScaleProp('paddingBottom', py, scale),
      ...keyToScaleProp('paddingLeft', pl, scale),
      ...keyToScaleProp('paddingRight', pr, scale),
      ...keyToScaleProp('paddingLeft', px, scale),
      ...keyToScaleProp('paddingRight', px, scale)
    }
  }

  scale.forEach((value, index) => {
    marginPropsKeys.forEach(key => {
      const props = keysToMarginScaleProps({ [key]: index }, scale)
      stylesSpec[`${key}${index}`] = props
      stylesSpec = mediaQuerizeUtil(stylesSpec, props, breakpointName => `${key}${index}_${breakpointName}`)
    })
    paddingPropsKeys.forEach(key => {
      const props = keysToPaddingScaleProps({ [key]: index }, scale)
      stylesSpec[`${key}${index}`] = props
      stylesSpec = mediaQuerizeUtil(stylesSpec, props, breakpointName => `${key}${index}_${breakpointName}`)
    })
  })
}

const styles = StyleSheet.create(stylesSpec)

export default styles

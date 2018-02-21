import { StyleSheet } from 'aphrodite/no-important'
import { hashObject, mapObj } from 'aphrodite/lib/util'

export const GLOBAL_STYLES_SELECTOR = 'pks/globalStyles'

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) => (
    baseSelector.includes(GLOBAL_STYLES_SELECTOR)
      ? generateSubtreeStyles(selector)
      : null
  )
}

const aphroditeGlobal = StyleSheet.extend([globalExtension])

function patchedCreate (sheetDefinition) {
  return mapObj(sheetDefinition, ([key, value]) => {
    return [key, {
      _name: (
        ((process.env.NODE_ENV === 'production') && (key !== GLOBAL_STYLES_SELECTOR))
          ? `_${hashObject(value)}`
          : `${key}_${hashObject(value)}`
      ),
      _definition: value
    }]
  })
}

aphroditeGlobal.StyleSheet.create = patchedCreate

export default aphroditeGlobal

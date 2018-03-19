
import { breakpoints } from '../constants'

function mediaQuerizeUtil (util, props, getClassName) {
  const breakpointsNames = Object.keys(breakpoints)

  breakpointsNames.forEach((breakpointName, breakpointIndex) => {
    const propsClassName = getClassName(breakpointName)
    const breakpointSize = breakpoints[breakpointName]

    let propsKey

    if (breakpointIndex === 0) {
      propsKey = `@media (max-width: ${breakpointSize}px)`
    } else if (breakpointIndex === (breakpoints.length - 1)) {
      propsKey = `@media (min-width: ${breakpointSize + 1}px)`
    } else {
      const nextBreakpointIndex = (breakpointIndex + 1)
      const nextBreakpointName = breakpointsNames[nextBreakpointIndex]
      const nextBreakpointSize = breakpoints[nextBreakpointName]

      propsKey = `@media (min-width: ${breakpointSize + 1}px) and (max-width: ${nextBreakpointSize}px)`
    }

    util[propsClassName] = { [propsKey]: props }
  })

  return util
}

export default mediaQuerizeUtil

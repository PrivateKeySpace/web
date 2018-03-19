
function getMediaQueries (breakpoints) {
  const mediaQueries = {}

  const breakpointsNames = Object.keys(breakpoints)

  breakpointsNames.forEach(breakpointName => {
    mediaQueries[`max_${breakpointName}`] = `@media (max-width: ${breakpoints[breakpointName]}px)`
    mediaQueries[`min_${breakpointName}`] = `@media (min-width: ${breakpoints[breakpointName]}px)`
  })

  mediaQueries['print'] = '@media print'

  return mediaQueries
}

export default getMediaQueries

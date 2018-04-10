import PropTypes from 'prop-types'
import { variants } from '../../../../theme/constants'

const propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(variants),
  controls: PropTypes.arrayOf(PropTypes.node)
}

export default propTypes

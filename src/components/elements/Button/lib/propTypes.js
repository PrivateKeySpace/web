import PropTypes from 'prop-types'
import { variants } from '../../../../theme/constants'

const propTypes = {
  link: PropTypes.bool,
  outline: PropTypes.bool,
  variant: PropTypes.oneOf(variants)
}

export default propTypes

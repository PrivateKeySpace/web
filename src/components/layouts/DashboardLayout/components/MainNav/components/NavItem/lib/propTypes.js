import PropTypes from 'prop-types'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default propTypes

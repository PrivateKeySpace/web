import PropTypes from 'prop-types'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default propTypes

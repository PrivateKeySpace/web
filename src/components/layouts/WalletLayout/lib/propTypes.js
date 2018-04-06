import PropTypes from 'prop-types'

const propTypes = {
  topBarContent: PropTypes.node,
  headerContent: PropTypes.node.isRequired,
  mainContent: PropTypes.node.isRequired,
  mainContentContainerProps: PropTypes.object
}

export default propTypes

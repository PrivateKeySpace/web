import PropTypes from 'prop-types'

const propTypes = {
  columns: PropTypes
    .arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
      })
    )
    .isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string.isRequired
}

export default propTypes

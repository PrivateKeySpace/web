import PropTypes from 'prop-types'

const propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  usdValue: PropTypes.number.isRequired,
  btcValue: PropTypes.number.isRequired
}

export default propTypes

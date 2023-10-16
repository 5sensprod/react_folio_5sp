import PropTypes from 'prop-types'
import { Icon } from '../common/Icon'

export function SubmitButton({ label, iconName, onClick }) {
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      {iconName ? <Icon iconName={iconName} /> : label}
    </button>
  )
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

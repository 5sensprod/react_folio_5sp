import PropTypes from 'prop-types'
import { Icon } from '../common/Icon'

export function SubmitButton({ label, iconName, onClick, className }) {
  return (
    <button
      type="submit"
      className={`btn ${className}`}
      onClick={onClick}
      style={{ background: 'transparent', border: 'none' }}
    >
      {iconName ? (
        <Icon iconName={iconName} additionalClasses="text-primary" />
      ) : (
        label
      )}
    </button>
  )
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

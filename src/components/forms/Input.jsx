import PropTypes from 'prop-types'

/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */

export function Input({
  placeholder,
  value,
  onChange,
  className = 'form-control',
}) {
  return (
    <input
      type="text"
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

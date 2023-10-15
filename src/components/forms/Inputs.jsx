import PropTypes from 'prop-types'

/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */

export function Input({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export function Button({ label, iconName, onClick }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {iconName ? <i className={`bi ${iconName}`}></i> : label}
    </button>
  )
}

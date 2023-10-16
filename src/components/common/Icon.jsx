export function Icon({ iconName, onClick, additionalClasses = '' }) {
  return (
    <i className={`bi ${iconName} ${additionalClasses}`} onClick={onClick}></i>
  )
}

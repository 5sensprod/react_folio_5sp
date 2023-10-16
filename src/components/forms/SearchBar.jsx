import { Input } from './Inputs'
import { SubmitButton } from './SubmitButton'

export function SearchBar({
  search,
  onSearchChange,
  useSubmitButton = true,
  submitLabel = 'Rechercher',
  iconName,
  onSubmit,
  children,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Rechercher ..."
        />
        {useSubmitButton && (
          <SubmitButton label={submitLabel} iconName={iconName} />
        )}
        {children}
      </div>
    </form>
  )
}

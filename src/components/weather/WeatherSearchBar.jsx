import { Input } from '../forms/Input'
import { SubmitButton } from '../forms/SubmitButton'

export function WeatherSearchBar({
  search,
  onSearchChange,
  onSubmit,
  useSubmitButton = true,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3 input-group">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Rechercher ..."
        />
        {useSubmitButton && (
          <div className="input-group-append">
            <SubmitButton label="Rechercher" iconName="bi-search" />
          </div>
        )}
      </div>
    </form>
  )
}

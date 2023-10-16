import { Checkbox } from '../forms/Checkbox'
import { Input } from '../forms/Input'
import { SubmitButton } from '../forms/SubmitButton'

export function ProductSearchBar({
  search,
  onSearchChange,
  showStockedOnly,
  onStockedOnlyChange,
  useSubmitButton = true,
}) {
  return (
    <form>
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
      <Checkbox
        id="stocked"
        checked={showStockedOnly}
        onChange={(value) => onStockedOnlyChange(value)}
        label="Afficher les produits en stock"
      />
    </form>
  )
}

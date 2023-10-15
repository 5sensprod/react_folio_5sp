import { Checkbox } from './Checkbox'
import { Input } from './Inputs'

export function SearchBar({
  showStockedOnly,
  onStockedOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <div>
      <div className="mb-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Rechercher ..."
        />
        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="Afficher les produits en stock"
        />
      </div>
    </div>
  )
}

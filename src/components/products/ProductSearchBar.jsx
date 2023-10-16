import { Checkbox } from '../forms/Checkbox'
import { SearchBar } from '../forms/SearchBar'

export function ProductSearchBar({
  search,
  onSearchChange,
  showStockedOnly,
  onStockedOnlyChange,
  useSubmitButton = true,
}) {
  return (
    <SearchBar
      search={search}
      onSearchChange={onSearchChange}
      useSubmitButton={useSubmitButton}
    >
      <Checkbox
        id="stocked"
        checked={showStockedOnly}
        onChange={(value) => onStockedOnlyChange(value)}
        label="Afficher les produits en stock"
      />
    </SearchBar>
  )
}

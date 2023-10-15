import { Checkbox } from './Checkbox'
import { Input } from './Inputs'

export function SearchBar() {
  return (
    <div>
      <div className="mb-3">
        <Input value="" onChange={() => null} placeholder="Rechercher ..." />
        <Checkbox
          id="stocked"
          checked={false}
          onChange={() => null}
          label="Afficher les produits en stock"
        />
      </div>
    </div>
  )
}

import React from 'react'
import { Form, InputGroup, FormControl, FormCheck } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './product.css'

export function ProductSearchBar({
  search,
  onSearchChange,
  showStockedOnly,
  onStockedOnlyChange,
}) {
  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher ..."
            aria-label="Recherche produit"
            className="bg-dark text-white"
          />
        </InputGroup>

        <FormCheck
          type="checkbox"
          id="stocked"
          checked={showStockedOnly}
          onChange={(e) => onStockedOnlyChange(e.target.checked)}
          label="Afficher les produits en stock"
        />
      </Form>
    </div>
  )
}

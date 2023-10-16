import React from 'react'
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  FormCheck,
} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

export function ProductSearchBar({
  search,
  onSearchChange,
  showStockedOnly,
  onStockedOnlyChange,
  useSubmitButton = true,
}) {
  return (
    <Form>
      <InputGroup className="mb-3">
        <FormControl
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher ..."
          aria-label="Recherche produit"
        />
        {useSubmitButton && (
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              <i className="bi bi-search"></i> Rechercher
            </Button>
          </InputGroup.Append>
        )}
      </InputGroup>

      <FormCheck
        type="checkbox"
        id="stocked"
        checked={showStockedOnly}
        onChange={(e) => onStockedOnlyChange(e.target.checked)}
        label="Afficher les produits en stock"
      />
    </Form>
  )
}

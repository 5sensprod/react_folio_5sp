import React, { useState, useMemo } from 'react'
import { PRODUCTS } from '../data/product'
import { ProductTable } from './products/ProductTable'
import { removeAccents } from '../utils/stringHelpers'
import { PageTitle } from './common/PageTitle'
import Weather from './weather/Weather'
import { ProductSearchBar } from './products/ProductSearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false)
  const [search, setSearch] = useState('')

  const visibleProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (showStockedOnly && !product.stocked) {
        return false
      }
      return removeAccents(product.name.toLowerCase()).includes(
        removeAccents(search.toLowerCase()),
      )
    })
  }, [search, showStockedOnly])

  return (
    <div className="container my-3">
      <PageTitle />
      <ProductSearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
        useSubmitButton={false}
      />
      <ProductTable products={visibleProducts} />
      <Weather />
    </div>
  )
}

export default App

import React, { useState, useMemo } from 'react'
import { PRODUCTS } from '../data/product'
import { SearchBar } from './forms/SearchBar'
import { ProductTable } from './products/ProductTable'
import { removeAccents } from '../utils/stringHelpers'
import { PageTitle } from './common/PageTitle'

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
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  )
}

export default App

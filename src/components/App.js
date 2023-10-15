import { PRODUCTS } from '../data/product'
import { SearchBar } from './forms/SearchBar'
import { ProductTable } from './products/ProductTable'

function App() {
  return (
    <div className="container my-3">
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  )
}

export default App

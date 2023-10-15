import { AnimatePresence } from 'framer-motion'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

/**
 * Composant pour afficher une table de produits avec leurs catégories.
 *
 * @param {Object} props Les props du composant.
 * @param {Array} props.products La liste des produits à afficher.
 * @returns {React.Element} Le rendu du composant.
 */
export function ProductTable({ products }) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />,
      )
      lastCategory = product.category
    }
    rows.push(<ProductRow key={product.name} product={product} />)
  })

  return (
    <table className="table table-hover table-responsive border">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        <AnimatePresence>{rows}</AnimatePresence>
      </tbody>
    </table>
  )
}

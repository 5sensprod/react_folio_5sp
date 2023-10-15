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
    // Si la catégorie du produit change, ajoutez une nouvelle ligne de catégorie.
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />,
      )
      lastCategory = product.category
    }

    // Ajoutez une nouvelle ligne de produit pour chaque produit.
    rows.push(<ProductRow key={product.name} product={product} />)
  })

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

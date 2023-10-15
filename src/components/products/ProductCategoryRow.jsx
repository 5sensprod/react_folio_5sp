/**
 * Composant pour afficher le nom d'une catégorie de produits dans une ligne de tableau.
 *
 * @param {Object} props Les props du composant.
 * @param {string} props.name Le nom de la catégorie à afficher.
 * @returns {React.Element} Le rendu du composant.
 */

export function ProductCategoryRow({ name }) {
  return (
    <tr>
      <td colSpan={2}>
        <strong>{name}</strong>
      </td>
    </tr>
  )
}

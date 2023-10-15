/**
 * Un composant qui affiche une case à cocher avec son label associé.
 *
 * @param {Object} props Les props du composant.
 * @param {boolean} props.checked Si la case est cochée ou non.
 * @param {(checked: boolean) => void} props.onChange Le gestionnaire appelé lors du changement d'état de la case.
 * @param {string} props.label Le texte du label associé à la case.
 * @param {string} props.id L'identifiant unique de la case à cocher, utilisé pour relier la case à son label.
 * @returns {React.Element} Le rendu du composant.
 */

export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  )
}

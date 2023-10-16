import { motion } from 'framer-motion'

export function ProductRow({ product }) {
  const style = product.stocked ? undefined : { color: 'red' }
  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </motion.tr>
  )
}

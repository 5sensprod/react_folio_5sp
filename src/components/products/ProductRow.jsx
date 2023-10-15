import { motion } from 'framer-motion'

export function ProductRow({ product }) {
  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <td>{product.name}</td>
      <td>{product.price}</td>
    </motion.tr>
  )
}

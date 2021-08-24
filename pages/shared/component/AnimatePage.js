import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const AnimatePage = ({ children }) => {
  const router = useRouter()
  return (
    <motion.div
      key={router.route}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1, }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePage
import '../styles/styles.scss'
import Layout from './shared/Layout';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <motion.div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  )
}

export default MyApp

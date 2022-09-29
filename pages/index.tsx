import type { NextPageWithLayout } from './_app'

import HomePage from 'components/home'
import Layout from 'layouts/layout'

const Home: NextPageWithLayout = () => {
  return <HomePage />
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home

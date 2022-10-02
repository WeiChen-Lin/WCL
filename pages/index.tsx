import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'
import HomePage from 'components/home'

const Home: NextPageWithLayout = () => {
  return <HomePage />
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home

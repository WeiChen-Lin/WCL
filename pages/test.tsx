import type { NextPageWithLayout } from './_app'

import HomePage from 'components/home'
import Layout from 'layouts/layout'

const Test: NextPageWithLayout = () => {
  return <HomePage />
}

Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Test

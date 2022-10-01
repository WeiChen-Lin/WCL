import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'

const Home: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home

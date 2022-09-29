import type { NextPageWithLayout } from './_app'

// import HomePage from 'components/home'
import Layout from 'layouts/layout'

const Home: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home

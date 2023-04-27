import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'
import HomePage from 'components/home'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  return <HomePage />
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <>
        <Head>
          <title>Home - WeiChen Lin</title>
        </Head>
        {page}
      </>
    </Layout>
  )
}

export default Home

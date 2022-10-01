import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'

const Demo: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

Demo.getLayout = function getLayout() {
  return <Layout></Layout>
}

export default Demo

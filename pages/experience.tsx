import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'

const Experience: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

Experience.getLayout = function getLayout() {
  return <Layout></Layout>
}

export default Experience

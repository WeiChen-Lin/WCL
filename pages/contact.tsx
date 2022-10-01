import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'

const Contact: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

Contact.getLayout = function getLayout() {
  return <Layout></Layout>
}

export default Contact

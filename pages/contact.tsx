import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'
import ContactPage from 'components/contact'

const Contact: NextPageWithLayout = () => {
  return <ContactPage />
}

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Contact

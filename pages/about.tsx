import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'

const About: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

About.getLayout = function getLayout() {
  return <Layout></Layout>
}

export default About

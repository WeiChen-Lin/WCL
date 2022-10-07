import type { NextPageWithLayout } from './_app'
import Layout from 'layouts'
import AboutPage from 'components/about'

const About: NextPageWithLayout = () => {
  return <AboutPage />
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default About

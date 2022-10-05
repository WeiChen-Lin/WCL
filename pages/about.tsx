import type { NextPageWithLayout } from './_app'
import Layout from 'layouts'
import WaveTitle from 'components/about'

const About: NextPageWithLayout = () => {
  return <WaveTitle />
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default About

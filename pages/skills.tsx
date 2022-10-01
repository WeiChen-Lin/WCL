import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'

const Skill: NextPageWithLayout = () => {
  return <div className=''>123</div>
}

Skill.getLayout = function getLayout() {
  return <Layout></Layout>
}

export default Skill

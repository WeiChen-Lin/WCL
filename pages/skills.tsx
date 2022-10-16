import type { NextPageWithLayout } from './_app'

import Layout from 'layouts'
import SkillPage from 'components/skills'

const Skill: NextPageWithLayout = () => {
  return <SkillPage />
}

Skill.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Skill

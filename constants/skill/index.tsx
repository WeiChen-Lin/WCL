import Frontend from './frontend'
import Backend from './backend'
import Skill from './interface'

interface Skills_type {
  [name: string]: Skill[]
}

const Skills: Skills_type = {
  Frontend: Frontend,
  Backend: Backend
  // Database: Frontend,
  // Tools: Frontend
}

export default Skills

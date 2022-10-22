import Frontend from './frontend'
import Backend from './backend'
import Database from './database'
import Tools from './tools'
import Skill from './interface'

interface Skills_type {
  [name: string]: Skill[]
}

const Skills: Skills_type = {
  Frontend: Frontend,
  Backend: Backend,
  Database: Database,
  Tools: Tools
}

export default Skills

import { MySQL, PostgreSQL, Redis } from 'public/skill/database/icons'
import styles from 'styles/skill/cube.module.css'
import Skill from './interface'

const Database: Skill[] = [
  {
    name: 'MySQL',
    icon: <MySQL className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'PostgreSQL',
    icon: <PostgreSQL className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Redis',
    icon: <Redis className={`${styles.cube_unit_img}`} />
  }
]

export default Database

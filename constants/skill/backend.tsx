import { Python, Flask, Django } from 'public/skill/backend/icons'
import styles from 'styles/skill/cube.module.css'
import Skill from './interface'

const Backend: Skill[] = [
  {
    name: 'Python',
    icon: <Python className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Flask',
    icon: <Flask className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Django',
    icon: <Django className={`${styles.cube_unit_img}`} />
  }
]

export default Backend

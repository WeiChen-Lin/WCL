import { Docker, Kubernetes, Nginx, Git } from 'public/skill/tools/icons'
import styles from 'styles/skill/cube.module.css'
import Skill from './interface'

const Tools: Skill[] = [
  {
    name: 'Docker',
    icon: <Docker className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Kubernetes',
    icon: <Kubernetes className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Nginx',
    icon: <Nginx className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Git',
    icon: <Git className={`${styles.cube_unit_img}`} />
  }
]

export default Tools

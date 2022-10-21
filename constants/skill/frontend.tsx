import {
  React,
  NextJS,
  CSS,
  Javascript,
  HTML
} from 'public/skill/frontend/icons'
import styles from 'styles/skill/cube.module.css'
import Skill from './interface'

const Frontend: Skill[] = [
  {
    name: 'React',
    icon: <React className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'NextJS',
    icon: <NextJS className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'CSS',
    icon: <CSS className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'Javascript',
    icon: <Javascript className={`${styles.cube_unit_img}`} />
  },
  {
    name: 'HTML',
    icon: <HTML className={`${styles.cube_unit_img}`} />
  }
]

export default Frontend

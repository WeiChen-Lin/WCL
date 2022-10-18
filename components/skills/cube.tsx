import styles from 'styles/skill/skill.module.css'
import React from 'public/skill/skill'
import { useState } from 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
interface Cube {
  skills: JSX.Element[]
}
interface CubeFace extends Cube {
  col_face: number
}
interface CubeColumn extends CubeFace {
  col_site: number
}
interface CubeUnit extends CubeColumn {}

const Cube_unit = (props: CubeUnit) => {
  const { col_face, col_site, skills } = props
  const [isHover, setIsHover] = useState<boolean>(true)
  const cube_index: number = col_face * 3 + col_site
  const haveImg: boolean = cube_index <= skills.length

  return (
    <>
      <span
        className={`${styles.cube} ${isHover ? styles.cube_unit_up : ''}`}
        style={{ '--cube_index': 1 }}
        datatype={`TEST${cube_index}`}
      >
        <div
          className='z-[999]'
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
        >
          {haveImg ? skills[cube_index] : ''}
        </div>
      </span>
      <span className={`${styles.cube}`} style={{ '--cube_index': 2 }}></span>
      <span className={`${styles.cube}`} style={{ '--cube_index': 3 }}></span>
    </>
  )
}

const Cube_column = (props: CubeColumn) => {
  const { col_site, col_face, skills } = props
  return (
    <>
      <div
        className={`${styles.cube_column}`}
        style={{ '--cube_col_site_x': col_site, '--cube_col_site_y': 0 }}
      >
        <Cube_unit col_site={col_site} col_face={col_face} skills={skills} />
      </div>
    </>
  )
}

const Cube_face = (props: CubeFace) => {
  const { col_face, skills } = props
  return (
    <>
      <div
        className={`${styles.cube_face}`}
        style={{ '--cube_face_site': col_face, '--cube_face_index': 2 }}
      >
        <Cube_column col_site={0} col_face={col_face} skills={skills} />
        <Cube_column col_site={1} col_face={col_face} skills={skills} />
        <Cube_column col_site={2} col_face={col_face} skills={skills} />
      </div>
    </>
  )
}

export default function Cube(props: Cube) {
  const { skills } = props

  return (
    <>
      <Cube_face col_face={0} skills={skills} />
      <Cube_face col_face={1} skills={skills} />
      <Cube_face col_face={2} skills={skills} />
    </>
  )
}

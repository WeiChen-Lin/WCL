import styles from 'styles/skill/cube.module.css'
import React from 'public/skill/skill'
import { useState } from 'react'
import Skill from 'constants/skill/interface'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
interface Cube {
  skills: Skill[]
  targetCube: string
}
interface CubeFace extends Cube {
  col_face: number
}
interface CubeColumn extends CubeFace {
  col_site: number
}
interface CubeUnit extends CubeColumn {}

const Cube_unit = (props: CubeUnit) => {
  const { col_face, col_site, skills, targetCube } = props
  const cube_index: number = col_face * 3 + col_site
  const haveImg: boolean = cube_index <= skills.length - 1

  return (
    <>
      <span
        className={`${styles.cube} ${
          haveImg && skills[cube_index].name === targetCube
            ? styles.cube_unit_up
            : ''
        }`}
        style={{ '--cube_index': 1 }}
      >
        <div className='z-[999]'>{haveImg ? skills[cube_index].icon : ''}</div>
      </span>
      <span className={`${styles.cube}`} style={{ '--cube_index': 2 }}></span>
      <span className={`${styles.cube}`} style={{ '--cube_index': 3 }}></span>
    </>
  )
}

const Cube_column = (props: CubeColumn) => {
  const { col_site, col_face, skills, targetCube } = props
  return (
    <>
      <div
        className={`${styles.cube_column}`}
        style={{ '--cube_col_site_x': col_site, '--cube_col_site_y': 0 }}
      >
        <Cube_unit
          col_site={col_site}
          col_face={col_face}
          skills={skills}
          targetCube={targetCube}
        />
      </div>
    </>
  )
}

const Cube_face = (props: CubeFace) => {
  const { col_face, skills, targetCube } = props
  return (
    <>
      <div
        className={`${styles.cube_face}`}
        style={{ '--cube_face_site': col_face, '--cube_face_index': 2 }}
      >
        <Cube_column
          col_site={0}
          col_face={col_face}
          skills={skills}
          targetCube={targetCube}
        />
        <Cube_column
          col_site={1}
          col_face={col_face}
          skills={skills}
          targetCube={targetCube}
        />
        <Cube_column
          col_site={2}
          col_face={col_face}
          skills={skills}
          targetCube={targetCube}
        />
      </div>
    </>
  )
}

export default function Cube(props: Cube) {
  const { skills, targetCube } = props

  return (
    <>
      <Cube_face col_face={0} skills={skills} targetCube={targetCube} />
      <Cube_face col_face={1} skills={skills} targetCube={targetCube} />
      <Cube_face col_face={2} skills={skills} targetCube={targetCube} />
    </>
  )
}

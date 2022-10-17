import styles from 'styles/skill/skill.module.css'
import React from 'public/skill/skill'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

interface CubeFace {
  col_face: number
}
interface CubeColumn {
  col_site: number
}

const Cube_unit = () => {
  return (
    <>
      <span className={`${styles.cube}`} style={{ '--cube_index': 1 }}>
        <React className={`${styles.cube_unit_img}`} />
      </span>
      <span className={`${styles.cube}`} style={{ '--cube_index': 2 }}></span>{' '}
      <span className={`${styles.cube}`} style={{ '--cube_index': 3 }}></span>
    </>
  )
}

const Cube_column = ({ col_site }: CubeColumn) => {
  return (
    <>
      <div
        className={`${styles.cube_column}`}
        style={{ '--cube_col_site_x': col_site, '--cube_col_site_y': 0 }}
      >
        <Cube_unit />
      </div>
    </>
  )
}

const Cube_face = ({ col_face }: CubeFace) => {
  return (
    <>
      <div
        className={`${styles.cube_face}`}
        style={{ '--cube_face_site': col_face, '--cube_face_index': 2 }}
      >
        <Cube_column col_site={0} />
        <Cube_column col_site={1} />
        <Cube_column col_site={2} />
      </div>
    </>
  )
}

export default function Cube() {
  return (
    <>
      <Cube_face col_face={0} />
      <Cube_face col_face={1} />
      <Cube_face col_face={2} />
    </>
  )
}

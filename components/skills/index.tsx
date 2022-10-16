import 'react'
import { useEffect, useRef, useState } from 'react'
import styles from 'styles/skill/skill.module.css'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

interface cubeBgSite {
  positionX: number
  positionY: number
}
export default function SkillPage() {
  const [cubeBg, setCubeBg] = useState<cubeBgSite>({
    positionX: 0,
    positionY: 0
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCubeBg({
      ...cubeBg,
      positionX: ref?.current?.clientWidth || 0,
      positionY: ref?.current?.clientHeight || 0
    })
  }, [ref])

  const top_num: number = (cubeBg.positionY - 400) / 2

  return (
    <div ref={ref} className='w-full h-screen relative flex justify-around'>
      <div className='w-[400px] bg-blue-300 h-full'>123</div>
      <div
        className={`${styles.container} w-[600px] h-[400px] right-4`}
        style={{
          top: `${top_num}px`
        }}
      >
        <div
          className={`${styles.cube_face}`}
          style={{ '--cube_face_site': 0, '--cube_face_index': 2 }}
        >
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 0, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube} ${styles.test}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 1, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>{' '}
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 2, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>
        </div>
        <div
          className={`${styles.cube_face}`}
          style={{ '--cube_face_site': 1, '--cube_face_index': 2 }}
        >
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 0, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 1, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>{' '}
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 2, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>
        </div>
        <div
          className={`${styles.cube_face}`}
          style={{ '--cube_face_site': 2, '--cube_face_index': 2 }}
        >
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 0, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 1, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>{' '}
          <div
            className={`${styles.cube_column}`}
            style={{ '--cube_col_site_x': 2, '--cube_col_site_y': 0 }}
          >
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 1 }}
            ></span>
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 2 }}
            ></span>{' '}
            <span
              className={`${styles.cube}`}
              style={{ '--cube_index': 3 }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  )
}

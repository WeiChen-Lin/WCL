import 'react'
import { useEffect, useRef, useState } from 'react'
import styles from 'styles/skill/skill.module.css'
import Cube from './cube'

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
        <Cube />
        <h1 className={`${styles.aspect}`}>FrontEnd</h1>
      </div>
    </div>
  )
}

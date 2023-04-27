import { useEffect, useRef, useState } from 'react'
import styles from 'styles/skill/cube.module.css'
import Cube from './cube'
import Field from './field'
import Skills from 'constants/skill'
import ListItem from './listitem'
import Skill from 'constants/skill/interface'

interface cubeBgSite {
  positionX: number
  positionY: number
}

export default function SkillPage() {
  const defaultCubeName = Object.keys(Skills)[0]

  const [cubeBg, setCubeBg] = useState<cubeBgSite>({
    positionX: 0,
    positionY: 0,
  })

  const ref = useRef<HTMLDivElement>(null)
  const [cubeFace, setCubeFace] = useState<string>(defaultCubeName)
  const [cubeImgs, setCubeImgs] = useState<Skill[]>(Skills['Frontend'])
  const [targetCube, setTargetCube] = useState<string>('')
  const [isRotate, setIsRotate] = useState(true)

  useEffect(() => {
    setCubeBg({
      ...cubeBg,
      positionX: ref?.current?.clientWidth || 0,
      positionY: ref?.current?.clientHeight || 0,
    })
  }, [ref?.current])

  const listItemWidth: number = cubeBg.positionX - 550

  return (
    <>
      <div
        ref={ref}
        className='w-full h-screen relative flex flex-col overflow-hidden justify-start'
      >
        <div className='h-1/5 w-full flex justify-evenly pt-10'>
          {Object.keys(Skills).map((e: string) => (
            <Field
              key={e}
              name={e}
              current={cubeFace}
              onChange={() => {
                setIsRotate(false)
                setTimeout(() => {
                  setIsRotate(true)
                }, 100)
                setCubeFace(e)
                setCubeImgs(Skills[e])
              }}
            />
          ))}
        </div>
        <div className='flex mt-36 justify-between'>
          <div className={`${styles.container} ml-20`}>
            <Cube
              skills={cubeImgs}
              targetCube={targetCube}
              isRotate={isRotate}
            />
            <div
              className={`${styles.aspect} ${
                isRotate ? styles.cube_rotate_effect : ''
              }`}
            >
              {cubeFace}
            </div>
          </div>
          <div
            className='ml-10 flex flex-wrap h-4/5'
            style={{
              width: `${listItemWidth}px`,
            }}
          >
            {Object.values(cubeImgs).map((e) => (
              <ListItem
                key={e.name}
                name={e.name}
                onChange={() => {
                  setTargetCube(e.name)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

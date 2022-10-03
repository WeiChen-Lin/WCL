import moveImgIcons from 'constants/home/moveImg'
import { ReactElement, useEffect, useRef, useState } from 'react'
import MoveImg from './moveImg'

interface shape {
  width: number | undefined
  height: number | undefined
}

export default function MoveImgs(): ReactElement {
  const position_x: string[] = ['10', '30', '60', '10', '80', '15', '45', '80']
  const position_y: string[] = ['10', '25', '15', '50', '40', '85', '75', '90']
  const [movePercent, setMovePercent] = useState<shape>({
    width: 0,
    height: 0
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(
      `current width = ${movePercent.width}`,
      `current height = ${movePercent.height}`
    )
    setMovePercent({
      width: ref.current?.offsetWidth,
      height: ref.current?.offsetHeight
    })
  }, [ref.current])
  const handleMouseMove = () => {}

  return (
    <div
      className='w-full min-h-screen absolute'
      ref={ref}
      onMouseMove={() => {
        handleMouseMove()
      }}
    >
      {moveImgIcons.map((ele, index) => {
        return (
          <MoveImg
            img={ele.icon}
            position_x={`${position_x[index]}%`}
            position_y={`${position_y[index]}%`}
            key={ele.name}
          />
        )
      })}
    </div>
  )
}

import moveImgIcons from 'constants/home/moveImg'
import { parentEle } from './moveImg'
import { ReactElement, useEffect, useRef, useState } from 'react'
import MoveImg from './moveImg'
import { MouseEvent } from 'react'

export default function MoveImgs(): ReactElement {
  const position_x: number[] = [10, 30, 60, 10, 80, 15, 45, 80]
  const position_y: number[] = [10, 25, 15, 50, 40, 85, 75, 90]
  const [parent, setParent] = useState<parentEle>({
    parentX: 0,
    parentY: 0
  })
  const ref = useRef<HTMLDivElement>(null)

  const handleMousemove = (e: MouseEvent) => {
    setParent((prev) => ({
      ...prev,
      parentX: Math.floor((e.clientX * 4) / 5),
      parentY: e.clientY
    }))
  }
  return (
    <div
      className='w-full min-h-screen absolute'
      ref={ref}
      onMouseMove={(e) => {
        handleMousemove(e)
      }}
    >
      {moveImgIcons.map((ele, index) => {
        return (
          <MoveImg
            img={ele.icon}
            position_x={`${position_x[index]}%`}
            position_y={`${position_y[index]}%`}
            key={ele.name}
            parent={parent}
          />
        )
      })}
    </div>
  )
}

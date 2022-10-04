import { useEffect, useRef, useState } from 'react'
import { MouseEvent } from 'react'

type Props = {
  position_x: string
  position_y: string
  img: JSX.Element
  parent: parentEle
}

export interface parentEle {
  parentX: number
  parentY: number
}

interface clientEle {
  clientX: number
  clientY: number
}

export default function MoveImg(props: Props) {
  const { position_x, position_y, img, parent } = props
  const ref = useRef<HTMLDivElement>(null)
  const [childState, setChildState] = useState<clientEle>({
    clientX: 0,
    clientY: 0
  })
  const [parentSite, setParentSite] = useState<parentEle>(parent)
  const [fullPageWidth, setFullPageWidth] = useState<number | undefined>(
    undefined
  )
  useEffect(() => {
    setChildState({
      clientX: ref.current?.offsetTop || 0,
      clientY: ref.current?.offsetLeft || 0
    })

    setFullPageWidth(ref.current?.parentElement?.offsetWidth)

    setParentSite(parent)
  }, [parent])

  return (
    <div
      className='w-7 h-7 absolute'
      style={{
        top: position_x,
        left: position_y,
        transform: `translate(${
          fullPageWidth
            ? ((parentSite.parentX - childState.clientX) / fullPageWidth) * 60
            : 0
        }px, ${
          fullPageWidth
            ? ((parentSite.parentY - childState.clientY) / fullPageWidth) * 60
            : 0
        }px)`,
        transitionDuration: '0.1s'
      }}
      ref={ref}
    >
      {img}
    </div>
  )
}

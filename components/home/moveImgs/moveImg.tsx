type Props = {
  position_x?: string
  position_y?: string
  img: JSX.Element
}

export default function MoveImg(props: Props) {
  const { position_x, position_y, img } = props
  return (
    <div
      className='w-7 h-7 absolute'
      style={{
        top: position_x,
        left: position_y
      }}
    >
      {img}
    </div>
  )
}

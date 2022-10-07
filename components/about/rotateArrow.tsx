import { Arrow } from 'public/about/arrow'
import styles from 'styles/about/wavetitle/wavetitle.module.css'

interface FancyShapeProp {
  borderRadius: string
}

interface ArrowProps {
  isOpen: boolean
}

const shapes: string[] = [
  '36% 64% 64% 36% / 14% 36% 64% 86%',
  '75% 25% 74% 26% / 29% 77% 23% 71%',
  '39% 61% 43% 57% / 52% 35% 65% 48%',
  '47% 53% 55% 45% / 30% 68% 32% 70%'
]

const FancyShape = (props: FancyShapeProp) => {
  const { borderRadius } = props
  const direction: string = Math.random() > 0.5 ? 'normal' : 'reverse'
  return (
    <span
      className={`absolute -top-5 -left-5 w-16 h-16 border border-amber-800 ${styles.arrow_border}`}
      style={{
        borderRadius: borderRadius,
        animationDirection: direction
      }}
    ></span>
  )
}

const RotateArrow = (props: ArrowProps) => {
  const { isOpen } = props
  return (
    <div
      className={`w-6 h-6 mt-[30%] ml-[10%] relative cursor-pointer
      ${isOpen ? 'rotate-90 duration-1000' : ''}`}
    >
      {shapes.map((e) => {
        return <FancyShape borderRadius={e} />
      })}
      <Arrow />
    </div>
  )
}

export default RotateArrow

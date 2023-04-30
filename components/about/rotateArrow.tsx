import { Arrow } from 'public/about/arrow'
import styles from 'styles/about/about.module.css'

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
      className={`absolute -top-3 -left-3 w-10 h-10 border border-amber-800 ${styles.arrow_border}`}
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
      className={`w-4 h-4 relative cursor-pointer
      ${isOpen ? 'rotate-90 duration-1000' : ''}`}
    >
      {shapes.map((e, index) => {
        return <FancyShape borderRadius={e} key={`border-${index}`} />
      })}
      <Arrow />
    </div>
  )
}

const RotateArrowＭobile = (props: ArrowProps) => {
  const { isOpen } = props
  return (
    <div
      className={`w-4 h-4 relative cursor-pointer
      ${isOpen ? 'rotate-90 duration-1000' : ''}`}
    >
      {shapes.map((e, index) => {
        return <FancyShape borderRadius={e} key={`border-${index}`} />
      })}
      <Arrow />
    </div>
  )
}

export default RotateArrow

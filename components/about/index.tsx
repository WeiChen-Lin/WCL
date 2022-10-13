import WaveTitle from './wavetitle'
import RotateArrow from './rotateArrow'
import Introduct from './introduct'
import { useState } from 'react'
import styles from 'styles/about/wavetitle.module.css'

const makeBox = (): JSX.Element[] => {
  const boxes: JSX.Element[] = []
  for (let index = 0; index < 5; index++) {
    for (let num = 0; num < 4; num++) {
      const random: string = (Math.random() * 2).toFixed(2)
      const image_name: string = `Image${index}${num}`
      boxes.push(
        <div
          className={`${styles.imgBlock}`}
          style={{
            animationDelay: `${random}s`,
            background: `url('/about/splitoceans/${num}${index}.png')`
          }}
        ></div>
      )
    }
  }
  return boxes
}

export default function Intro() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleMouseEvent = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div
        className={`flex m-auto mt-[15%] relative transition-width duration-1000 
        ${isOpen ? 'w-[975px]' : 'w-[650px]'}
        `}
      >
        <div
          className={`transition-all duration-1000 ${
            isOpen ? 'w-[600px]' : 'w-[400px]'
          }`}
        >
          <WaveTitle />
          <div
            className={`bg-slate-300/25 h-64 rounded-lg duration-1000 transition-all flex ${
              isOpen ? 'h-48' : 'h-32'
            }`}
            onMouseEnter={() => {
              handleMouseEvent()
            }}
            onMouseLeave={() => {
              handleMouseEvent()
            }}
          >
            <RotateArrow isOpen={isOpen} />
            <Introduct isOpen={isOpen} />
          </div>
        </div>
        <section className={`${styles.imgAnimate}`}>
          <div className='relative w-[400px] h-[250px]'>
            <div className={`${styles.imgBanner}`}>{makeBox()}</div>
          </div>
        </section>
      </div>
    </>
  )
}

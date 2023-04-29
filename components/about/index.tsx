import WaveTitle from './wavetitle'
import RotateArrow from './rotateArrow'
import Introduct from './introduct'
import { useState } from 'react'
import PuzzleBg from './puzzle'

export default function Intro() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleMouseEvent = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div
        className={`flex flex-1 w-full relative transition-width duration-1000 flex-col`}
      >
        <div className={`transition-all duration-1000`}>
          <div className='w-full flex justify-center'>
            <div className='relative'>
              <WaveTitle />
            </div>
          </div>
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
        {/* <PuzzleBg /> */}
      </div>
    </>
  )
}

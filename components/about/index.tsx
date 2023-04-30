import WaveTitle from './wavetitle'
import RotateArrow from './rotateArrow'
import Introduct from './introduct'
import { useState } from 'react'
import { PuzzleBg, PuzzleBgMobile } from './puzzle'

export default function Intro() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleMouseEvent = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div
        className={`flex flex-col flex-1 w-full relative transition-width duration-1000 gap-y-4`}
      >
        <div className='w-full flex justify-center mt-[10%]'>
          <div className='relative'>
            <WaveTitle />
          </div>
        </div>
        <div className='w-full flex'>
          <div className='relative mx-auto'>
            <PuzzleBgMobile />
          </div>
        </div>
        <div
          className={`mx-auto w-[90%] bg-slate-300/25 rounded-lg duration-1000 transition-all flex ${
            isOpen ? 'h-80' : 'h-64'
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
    </>
  )
}

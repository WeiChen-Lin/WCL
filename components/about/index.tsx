import Image from 'next/image'
import bg from 'public/about/bg.jpg'
import WaveTitle from './wavetitle'
import RotateArrow from './rotateArrow'
import Introduct from './introduct'
import { useState } from 'react'

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
        <div
          className={`bg-slate-600 absolute right-4 -top-11 overflow-hidden rounded-xl h-[250px]
          ${isOpen ? 'w-[400px]' : 'w-[400px]'}
          `}
        >
          <Image src={bg} width={400} height={250}></Image>
        </div>
      </div>
    </>
  )
}

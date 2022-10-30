import styles from 'styles/contact/contact.module.css'
import { useRef, useState } from 'react'

const Arrow = ({ isHover }: { isHover: boolean }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 13 12.2'
        className={`w-4 h-4 mr-2 my-1 absolute top-2 left-5 ${
          isHover ? styles.buttonAnimate : ''
        }`}
      >
        <polyline stroke='currentColor' points='2,7.1 6.5,11.1 11,7.1 ' />
        <line stroke='currentColor' x1='6.5' y1='1.2' x2='6.5' y2='10.3' />
      </svg>
    </>
  )
}

interface WordProps {
  sec: number
  word: string
  index: number
  targetWord: number[]
  isHover: boolean
}

const submit = [10, 9, 10, 14, 4, 6]

const DisapperWord = (props: WordProps) => {
  const { sec, word, index, targetWord, isHover } = props
  const ref = useRef<HTMLSpanElement>(null)
  const isFirstPosition: boolean = index === 0 ? true : false
  const finalPosition: number = isFirstPosition
    ? 0
    : targetWord.slice(0, index).reduce((acc, cur) => acc + cur + 1, 0)

  return (
    <span
      className={`absolute text-base font-black top-2 ${
        isHover ? styles.buttonAnimate : ''
      }`}
      style={{
        '--word': `${sec}ms`,
        left: `${40 + finalPosition}px`
      }}
      ref={ref}
    >
      {word}
    </span>
  )
}

export default function SubmitBut() {
  const [isHover, setIsHover] = useState(false)
  return (
    <>
      <button
        className='bg-gray-300 rounded-full cursor-pointer h-10 item-center 
        px-6 py-2 overflow-hidden relative w-[118px] flex'
        onMouseEnter={() => {
          setIsHover((prev) => !prev)
        }}
      >
        <Arrow isHover={isHover} />
        {Array.from('Submit').map((ele, index) => {
          return (
            <DisapperWord
              sec={index * 50}
              word={ele}
              index={index}
              key={ele}
              targetWord={submit}
              isHover={isHover}
            />
          )
        })}
      </button>
    </>
  )
}

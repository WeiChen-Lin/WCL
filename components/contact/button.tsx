import styles from 'styles/contact/contact.module.css'
import { useRef, useState } from 'react'

const Arrow = ({ isHover }: { isHover: boolean }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 13 12.2'
        className={`w-4 h-4 mr-2 my-1 absolute top-2 left-5 ${
          isHover ? styles.wordDisappear : ''
        }`}
      >
        <polyline stroke='currentColor' points='2,7.1 6.5,11.1 11,7.1 ' />
        <line stroke='currentColor' x1='6.5' y1='1.2' x2='6.5' y2='10.3' />
      </svg>
    </>
  )
}

const SuccessSVG = ({ classname }: { classname?: string }) => {
  return (
    <svg
      className={`w-4 h-4 mr-2 my-1 absolute top-2 left-5 ${styles.animated_check} ${classname}`}
      viewBox='0 0 24 24'
    >
      <path d='M4.1 12.7L9 17.6 20.3 6.3' fill='none' />
    </svg>
  )
}

interface WordProps {
  sec?: number
  word?: string
  index?: number
  targetWord: number[]
  isHover: boolean
}

const submit = [10.4, 9.3, 9.6, 14.1, 4.4, 5.8]
const success = [10.4, 9.3, 9, 9, 9, 8.4, 8.4]

const DisapperWord = (props: WordProps) => {
  const { sec, word, index, targetWord, isHover } = props
  const ref = useRef<HTMLSpanElement>(null)
  const isFirstPosition: boolean = index === 0 ? true : false
  const finalPosition: number = isFirstPosition
    ? 0
    : targetWord.slice(0, index).reduce((acc, cur) => acc + cur, 0)

  return (
    <span
      className={`absolute text-base font-black top-2 ${
        isHover ? styles.wordDisappear : ''
      }`}
      style={{
        '--word': `${sec}ms`,
        left: `${45 + finalPosition}px`
      }}
      ref={ref}
    >
      {word}
    </span>
  )
}

const AppearWord = (props: WordProps) => {
  const { sec, word, index, targetWord, isHover } = props
  const isFirstPosition: boolean = index === 0 ? true : false
  const finalPosition: number = isFirstPosition
    ? 0
    : targetWord.slice(0, index).reduce((acc, cur) => acc + cur, 0)

  return (
    <span
      className={`absolute text-base font-black top-2 opacity-5	left-52 ${
        isHover ? styles.wordAppear : ''
      }`}
      style={{
        '--word': `${sec}ms`,
        '--pos': `${50 + finalPosition}px`
      }}
    >
      {word}
    </span>
  )
}
const SubmitText = (props: WordProps) => {
  const { targetWord, isHover } = props
  return (
    <>
      <Arrow isHover={isHover} />
      {Array.from('Submit').map((ele, index) => {
        return (
          <DisapperWord
            sec={index * 50}
            word={ele}
            index={index}
            key={ele}
            targetWord={targetWord}
            isHover={isHover}
          />
        )
      })}
    </>
  )
}

const SuccessText = (props: WordProps) => {
  const { targetWord, isHover } = props
  return (
    <>
      <SuccessSVG />
      {Array.from('Success').map((ele, index) => {
        return (
          <AppearWord
            sec={index * 50}
            word={ele}
            index={index}
            key={ele}
            targetWord={success}
            isHover={isHover}
          />
        )
      })}
    </>
  )
}

const Loading = () => {
  return (
    <ul className='relative m-auto w-9 h-3'>
      <li
        className={`absolute w-2 h-2 bg-slate-400 rounded-full ${styles.custom_bounce}`}
        style={{
          '--x': `0ms`,
          left: '2px'
        }}
      ></li>
      <li
        className={`absolute w-2 h-2 bg-slate-400 rounded-full ${styles.custom_bounce}`}
        style={{
          '--x': `50ms`,
          left: '12px'
        }}
      ></li>
      <li
        className={`absolute w-2 h-2 bg-slate-400 rounded-full ${styles.custom_bounce}`}
        style={{
          '--x': `100ms`,
          left: '22px'
        }}
      ></li>
    </ul>
  )
}

export default function SubmitBut() {
  const [isHover, setIsHover] = useState(false)
  return (
    <>
      <button
        className={`bg-gray-300 rounded-full cursor-pointer h-10 item-center 
        px-6 py-2 relative flex mt-5 transition-all ${
          isHover ? 'w-32' : 'w-32'
        }`}
        onMouseEnter={() => {
          setIsHover((prev) => !prev)
        }}
      >
        {/* <SubmitText targetWord={submit} isHover={isHover} /> */}
        {/* <Loading /> */}
        {/* <SuccessText targetWord={submit} isHover={isHover} /> */}
        <div className={`absolute w-96 h-80 -top-80 -left-32`}>
          <div
            className={`w-full h-full bg-yellow-400/10 ${styles.confetti_container}`}
          >
            <div className={`${styles.confetti}`}></div>
          </div>
        </div>
      </button>
    </>
  )
}

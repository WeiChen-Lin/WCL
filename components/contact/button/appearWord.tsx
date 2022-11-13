import styles from 'styles/contact/button/appearword.module.css'
import { WordProps } from './type'
import { useState } from 'react'

const success = [10.4, 9.3, 9, 9, 9, 8.4, 8.4]

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

const AppearWord = (props: WordProps) => {
  const { sec, word, index, width } = props
  const isFirstPosition: boolean = index === 0 ? true : false
  const finalPosition: number = isFirstPosition
    ? 0
    : success.slice(0, index).reduce((acc, cur) => acc + cur, 0)

  return (
    <span
      className={`absolute text-base font-black top-2 opacity-5	left-52 ${
        width ? '' : styles.wordAppear
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

export default function SuccessText(props: WordProps) {
  const { width } = props
  const [effect, setEffect] = useState(width)
  setTimeout(() => {
    setEffect((prev) => !prev)
  }, 200)
  return (
    <>
      <SuccessSVG />
      {Array.from('Success').map((ele, index) => {
        return (
          <AppearWord
            sec={index * 50}
            word={ele}
            index={index}
            key={`success_${ele}_${index}`}
            targetWord={success}
            width={effect}
          />
        )
      })}
    </>
  )
}

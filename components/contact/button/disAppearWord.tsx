import styles from 'styles/contact/button/disappearword.module.css'
import { WordProps } from './type'

const Arrow = ({ width }: { width: boolean }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 13 12.2'
        className={`w-4 h-4 mr-2 my-1 absolute top-2 left-5 ${
          width ? '' : styles.wordDisappear
        }`}
      >
        <polyline stroke='currentColor' points='2,7.1 6.5,11.1 11,7.1 ' />
        <line stroke='currentColor' x1='6.5' y1='1.2' x2='6.5' y2='10.3' />
      </svg>
    </>
  )
}

const submit = [10.4, 9.3, 9.6, 14.1, 4.4, 5.8]

const DisapperWord = (props: WordProps) => {
  const { sec, word, index, width } = props
  const isFirstPosition: boolean = index === 0 ? true : false
  const finalPosition: number = isFirstPosition
    ? 0
    : submit.slice(0, index).reduce((acc, cur) => acc + cur, 0)

  return (
    <span
      className={`absolute text-base font-black top-2 ${
        width ? '' : styles.wordDisappear
      }`}
      style={{
        '--word': `${sec}ms`,
        left: `${45 + finalPosition}px`
      }}
    >
      {word}
    </span>
  )
}

export default function SubmitText(props: WordProps) {
  const { width } = props
  return (
    <>
      <Arrow width={width} />
      {Array.from('Submit').map((ele, index) => {
        return (
          <DisapperWord
            sec={index * 50}
            word={ele}
            index={index}
            key={`submit_${ele}_${index}`}
            targetWord={submit}
            width={width}
          />
        )
      })}
    </>
  )
}

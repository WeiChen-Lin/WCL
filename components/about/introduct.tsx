import styles from 'styles/about/wavetitle.module.css'

const introduction: string = `I am WeiChen Lin,
A web developer from Taipei, Taiwan.
Have experience at both frontend and backend,
Interested in developing a good user experience product.
Previous work at NTU, recently work at Tagtoo.`

interface Animated {
  isOpen: boolean
}

interface Animated_Word extends Animated {
  word: string
  delay: number
}

const Intro_unit = (props: Animated_Word) => {
  const { word, delay, isOpen } = props
  const delayToString = (1 + delay).toString()
  return (
    <span
      className={`${styles.textAnimate}`}
      style={{
        transitionDelay: `${delayToString}s`,
        backgroundSize: isOpen ? '100% 100%' : '0 100%'
      }}
    >
      {word}
    </span>
  )
}

const handleIntroduction = (isOpen: boolean) => {
  const intros: JSX.Element[] = []
  let delayInit: number = 0

  introduction.split('\n').forEach((ele) => {
    const word_list: string[] = ele.split(' ')
    const num: number = word_list.length
    for (let i = 0; i <= num; i++) {
      if (i !== num) {
        intros.push(
          <Intro_unit
            word={word_list[i] + ' '}
            delay={delayInit + 0.05}
            isOpen={isOpen}
            key={word_list[i]}
          />
        )
      } else {
        intros.push(<br />)
      }
      delayInit = delayInit + 0.1
    }
  })
  return intros
}

export default function Introduct(props: Animated) {
  const { isOpen } = props
  return (
    <>
      <a
        className={`pt-[5%] pl-[8%] pr-[3%] w-full font-sans`}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        {handleIntroduction(isOpen)}
      </a>
    </>
  )
}

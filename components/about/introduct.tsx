import styles from 'styles/about/about.module.css'

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
  const delayToString = (0.5 + delay).toString()
  return (
    <span
      className={`${styles.textAnimate}`}
      style={{
        transform: `${isOpen ? 'translateY(0px)' : 'translateY(30px)'}`,
        backgroundSize: isOpen ? '100% 0%, 100% 100%' : '100% 100%, 100% 0%',
        opacity: isOpen ? '1' : '0',
        transition: isOpen
          ? '.4s background linear, 0.7s opacity ease-in, 0.5s transform linear'
          : '',
        transitionDelay: isOpen ? `${delayToString}s, 0.4s, 0.45s` : '0s'
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
            word={word_list[i] + '\u00A0'}
            delay={delayInit}
            isOpen={isOpen}
            key={word_list[i] + delayInit.toString()}
          />
        )
      } else {
        intros.push(<br key={delayInit.toString()} />)
      }
      delayInit = delayInit + 0.02
    }
  })
  return intros
}

export default function Introduct(props: Animated) {
  const { isOpen } = props
  return (
    <>
      <a className='pt-[5%] pl-[8%] pr-[3%] w-full font-sans'>
        {handleIntroduction(isOpen)}
      </a>
    </>
  )
}

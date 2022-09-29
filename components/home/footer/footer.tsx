import styles from 'styles/home/footer/footer.module.css'

const Random_li = (dom_key: number) => {
  const seconds: number = (Math.random() * 2000) / 1000
  const width: number = Math.random() * 100 + 70
  const position: number = Math.random() * 100
  return (
    <li
      className={`${styles.bubble} rounded-full absolute bg-orange-50`}
      key={dom_key}
      style={{
        animationDuration: `${seconds + 2}s`,
        animationDelay: `${seconds + 1}s`,
        width: `${width}px`,
        height: `${width}px`,
        left: `${position}%`
      }}
    ></li>
  )
}

const make_Bubbles = (): JSX.Element[] => {
  const bubbles: JSX.Element[] = []
  for (let i: number = 0; i < 300; i++) {
    bubbles.push(Random_li(i))
  }
  return bubbles
}

export default function Footer(): JSX.Element {
  return (
    <div className='fixed w-full bottom-0 contrast-[8]'>
      <div className={`relative h-3 bg-orange-50 ${styles.bubble_ul}`}>
        <ul className='flex relative'>{make_Bubbles()}</ul>
      </div>
    </div>
  )
}

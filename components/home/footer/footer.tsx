import styles from 'styles/home/footer/footer.module.css'

const Random_li = (dom_key: number) => {
  const seconds: number = (Math.random() * 2000) / 1000
  const width: number = Math.random() * 100 + 70
  const position: number = Math.random() * 100
  return (
    <li
      className={`${styles.bubble} bg-black rounded-full absolute`}
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

const make_ten = (): JSX.Element[] => {
  const ten: JSX.Element[] = []
  for (let i = 0; i < 300; i++) {
    ten.push(Random_li(i))
  }
  return ten
}

export default function Footer() {
  return (
    <div className='fixed w-full bottom-0 contrast-[8]'>
      <div
        className='relative h-4 bg-black
       before:contents-[""] before:absolute before:-top-20 before:left-0 before:right-0 before:bottom-0
       before:z-10 before:backdrop-blur-sm'
      >
        <ul className='flex relative'>{make_ten()}</ul>
      </div>
    </div>
  )
}

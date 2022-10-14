import styles from 'styles/about/about.module.css'

const makePuzzlePieces = (): JSX.Element[] => {
  const boxes: JSX.Element[] = []
  for (let index = 0; index < 5; index++) {
    for (let num = 0; num < 4; num++) {
      const random: string = Math.random().toFixed(2)
      boxes.push(
        <div
          className={`${styles.imgBlock}`}
          style={{
            animationDelay: `${random}s`,
            background: `url('/about/splitoceans/${num}${index}.png')`
          }}
        ></div>
      )
    }
  }
  return boxes
}

export default function PuzzleBg() {
  return (
    <section className={`${styles.imgAnimate}`}>
      <div className='relative w-[400px] h-[250px]'>
        <div className={`${styles.imgBanner}`}>{makePuzzlePieces()}</div>
      </div>
    </section>
  )
}

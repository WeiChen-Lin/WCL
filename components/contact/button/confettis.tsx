import styles from 'styles/contact/button/confetti.module.css'

const getRangedNumber = ([x, y]: number[]) => {
  return Math.floor(x + Math.random() * (y - x))
}

const getRandomItem = (arr: string[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const item = arr[randomIndex]

  return item
}

const makeConfettis = (): JSX.Element => {
  return (
    <>
      {[...Array(40).keys()].map((e) => {
        return <Confetti key={`confetti_${e}`} />
      })}
    </>
  )
}

const Confetti = () => {
  const colors = [
    '#00e600',
    '#ff1a8c',
    '#8080ff',
    '#33ccff',
    '#66cc99',
    '#ff8080',
    '#ffa64d'
  ]
  const color = getRandomItem(colors)
  const x = getRangedNumber([-300, 300])
  const y = getRangedNumber([-200, -400])
  const sp_x = getRangedNumber([5, 35])
  const sp_y = getRangedNumber([40, 90])

  return (
    <div
      className={`${styles.confetti}`}
      style={{
        '--x': `${x}`,
        '--y': `${y}`,
        '--px': `${sp_x}`,
        '--py': `${sp_y}`,
        '--color': color
      }}
    ></div>
  )
}

export default function Confettis() {
  return (
    <div className={`absolute w-96 h-80 -top-[280px] -left-32`}>
      <div className={`w-full h-full ${styles.confetti_container}`}>
        {makeConfettis()}
      </div>
    </div>
  )
}

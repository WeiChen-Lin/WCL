import styles from 'styles/layout/menu.module.css'

type Props = {
  title: string
  active: boolean
}

export default function Menu(props: Props) {
  const { title, active } = props
  return (
    <ul className='relative flex flex-col justify-center items-center gap-8'>
      <li className='relative'>
        <a
          datatype={`\u00A0${title}\u00A0}`}
          className={`${active ? styles.textCurrent : styles.textAnimate}`}
        >
          &nbsp;{`${title}`}&nbsp;
        </a>
      </li>
    </ul>
  )
}

import styles from 'styles/home/upperlayer/upperlayer.module.css'

type Props = {
  title: string
}

export default function Menu(props: Props) {
  const { title } = props
  return (
    <ul className='relative flex flex-col justify-center items-center gap-8'>
      <li className='relative'>
        <a
          datatype={`\u00A0${title}\u00A0}`}
          className={`${styles.textAnimate}`}
        >
          &nbsp;{`${title}`}&nbsp;
        </a>
      </li>
    </ul>
  )
}

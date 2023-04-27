import styles from 'styles/layout/menu.module.css'
import { useRouter } from 'next/router'

type Props = {
  title: string
  active: boolean
  route: string
  reaction?: () => void
}

export default function Menu(props: Props) {
  const { title, active, route, reaction } = props
  const router = useRouter()
  return (
    <ul className='relative flex flex-col justify-center items-center gap-8'>
      <li>
        <a
          datatype={`\u00A0${title}\u00A0}`}
          className={`${active ? styles.textCurrent : styles.textAnimate}`}
          onClick={() => {
            if (reaction) reaction()
            if (route === 'home') {
              router.push('/')
            } else {
              router.push(`/${route}`)
            }
          }}
        >
          &nbsp;{`${title}`}&nbsp;
        </a>
      </li>
    </ul>
  )
}

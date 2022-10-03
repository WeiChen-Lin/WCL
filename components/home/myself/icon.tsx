import styles from 'styles/home/icon/icon.module.css'

type Props = {
  icon: JSX.Element
  media_name: string
  link: string
}

export default function Icon(props: Props) {
  const { icon, media_name, link } = props
  return (
    <li
      className={`mx-2 border-2 w-12 h-12 justify-center rounded-xl flex items-center
    border-white/40	border-r-2 border-r-white/20 border-b-white/20 shadow-xl backdrop-blur-sm
      ${styles.glass}`}
      key={media_name}
    >
      <a
        href={link}
        target='_blank'
        className='w-full h-full py-[10px] px-[10px]'
      >
        {icon}
      </a>
    </li>
  )
}

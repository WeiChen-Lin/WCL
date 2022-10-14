import { ReactElement } from 'react'
import SideBar from './sidebar'
import { useRouter } from 'next/router'
import styles from 'styles/about/about.module.css'

type Props = {
  children?: ReactElement
}

export default function Layout({ children }: Props): ReactElement {
  const router = useRouter()
  const currentSite = router.route === '/' ? '/home' : router.route
  return (
    <div
      className={`min-h-screen w-full bg-slate-500 flex ${styles.perspective}`}
    >
      <SideBar currentSite={currentSite} />
      <div className='w-4/5'>{children}</div>
    </div>
  )
}

import { ReactElement } from 'react'
import SideBar from './sidebar'
import { useRouter } from 'next/router'

type Props = {
  children?: ReactElement
}

export default function Layout({ children }: Props): ReactElement {
  const router = useRouter()
  const currentSite = router.route === '/' ? '/home' : router.route

  return (
    <div
      className={`h-screen w-full bg-slate-500 p-0 m-0 flex flex-col md:flex-row`}
    >
      <SideBar currentSite={currentSite} />
      {/* <div className='w-4/5'> */}
      {children}
      {/* </div> */}
    </div>
  )
}

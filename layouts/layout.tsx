import { ReactElement } from 'react'
import SideBar from './menu'
type Props = {
  children: ReactElement
  currentSite?: string
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className='min-h-screen w-full bg-slate-500 flex'>
      <SideBar />
      <div className='w-4/5'>{children}</div>
    </div>
  )
}

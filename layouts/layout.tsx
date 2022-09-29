import { ReactElement } from 'react'
import Menu from 'components/home/upperlayer'
type Props = {
  children: ReactElement
  currentSite: string
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className='min-h-screen w-full bg-slate-500 flex'>
      <div className='w-1/5 border-r-2 border-zinc-400/20 flex flex-col justify-between px-10 py-12'>
        <h1 className='text-2xl text-gray-100 font-bold opacity-60'>
          WeiChen Lin<span className='text-5xl text-red-200'>.</span>
        </h1>
        <div>
          <Menu />
        </div>
        <p className='text-sm'>© WeiChen Lin 2022</p>
      </div>
      <div className='w-4/5'>{children}</div>
    </div>
  )
}

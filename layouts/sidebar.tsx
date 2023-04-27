import Menu from 'components/layout'
import router from 'next/router'
import clsx from 'clsx'
import { useState } from 'react'
import { useScreen } from 'hooks'

interface Props {
  currentSite: string
}

interface HambergurProps {
  isClick: boolean
}

interface PopupProps {
  reaction: () => void
}

const MobileSidebar = (props: Props) => {
  const [isClick, setIsClick] = useState(false)
  const handleClick = () => {
    setIsClick((prev) => !prev)
  }

  const { currentSite } = props

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full flex justify-between h-16'>
        <div className='my-2 mx-2' onClick={handleClick}>
          <Hambergur isClick={isClick} />
        </div>
        <div className='flex-1 text-2xl text-gray-100 font-bold opacity-60 cursor-pointer text-center'>
          WeiChen Lin<span className='text-5xl text-red-200'>.</span>
        </div>
      </div>
      <PopUpMenu
        isClick={isClick}
        currentSite={currentSite}
        reaction={handleClick}
      />
    </div>
  )
}

const DesktopSidebar = (props: Props) => {
  const { currentSite } = props

  return (
    <div className='w-1/4 border-r-2 border-zinc-400/20 flex flex-col justify-between px-6 lg:px-10 py-12 cur'>
      <div
        className='text-xl lg:text-2xl xl:text-3xl text-gray-100 font-bold opacity-60 cursor-pointer'
        onClick={() => {
          router.push('/')
        }}
      >
        WeiChen Lin<span className='text-5xl text-red-200'>.</span>
      </div>
      <Menu currentSite={currentSite}></Menu>
      <div className='text-sm'>© WeiChen Lin 2022</div>
    </div>
  )
}

const Hambergur = (props: HambergurProps) => {
  const { isClick } = props

  return (
    <div className='w-12 h-12 flex flex-col justify-center'>
      <div
        className={clsx(
          'h-1 bg-slate-600 w-2/3 my-1 mx-2 transition-all duration-300',
          `${isClick ? 'rotate-45 translate-y-3' : ''}`
        )}
      ></div>
      <div
        className={clsx(
          'h-1 bg-slate-600 w-8 my-1 mx-2 transition-all duration-300',
          `${isClick ? 'opacity-0' : 'opacity-100'}`
        )}
      ></div>{' '}
      <div
        className={clsx(
          'h-1 bg-slate-600 w-8 my-1 mx-2 transition-all duration-300',
          `${isClick ? '-rotate-45 -translate-y-3' : ''}`
        )}
      ></div>
    </div>
  )
}

const PopUpMenu = (props: HambergurProps & PopupProps & Props) => {
  const { isClick, currentSite, reaction } = props
  return (
    <div
      className={clsx(
        'bg-zinc-300 absolute top-16 left-4 rounded-md flex flex-col transition-all duration-500 items-center justify-between z-10',
        `${isClick ? 'w-2/3 h-48' : 'w-0 h-0'}`
      )}
    >
      {isClick && (
        <>
          <div className='mt-4'>
            <Menu currentSite={currentSite} reaction={reaction} />
          </div>
          <div className='text-sm text-gray-600 truncate'>
            © WeiChen Lin 2022
          </div>
        </>
      )}
    </div>
  )
}

export default function SideBar(props: Props) {
  const { currentSite } = props
  const width = useScreen()

  return width < 768 ? (
    <MobileSidebar currentSite={currentSite} />
  ) : (
    <DesktopSidebar currentSite={currentSite} />
  )
}

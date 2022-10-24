import Menu from 'components/layout'

interface Props {
  currentSite: string
}

export default function SideBar(props: Props) {
  const { currentSite } = props
  return (
    <div className='w-1/5 border-r-2 border-zinc-400/20 flex flex-col justify-between px-10 py-12'>
      <h1 className='text-3xl text-gray-100 font-bold opacity-60'>
        WeiChen Lin<span className='text-5xl text-red-200'>.</span>
      </h1>
      <Menu currentSite={currentSite}></Menu>
      <p className='text-sm'>© WeiChen Lin 2022</p>
    </div>
  )
}

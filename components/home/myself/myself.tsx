import wcl from 'public/home/wcl.jpg'
import Icon from './icon'
import Image from 'next/image'
import socailMedias from 'constants/home/myself'

export default function Myself() {
  return (
    <div className='w-1/3 h-screen mx-auto flex flex-col justify-center'>
      <div className='h-1/2 flex flex-col items-center'>
        <div className='rounded-full overflow-hidden w-32 h-32'>
          <Image src={wcl} width={128} height={128} />
        </div>
        <a className='text-white font-black text-2xl opacity-80 mt-4'>
          WeiChen Lin
        </a>
        <ul className='mt-10 flex'>
          {socailMedias.map((e) => {
            return (
              <Icon
                icon={e.icon}
                media_name={e.media_name}
                link={e.link}
                key={e.media_name}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

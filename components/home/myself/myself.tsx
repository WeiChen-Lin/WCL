import wcl from 'public/home/wcl.jpg'
import Icon from './icon'
import Image from 'next/image'
import socailMedias from 'constants/home/myself'

export default function Myself() {
  return (
    <div className='w-full mx-auto flex flex-col items-center justify-start'>
      <div className='rounded-full overflow-hidden w-32 h-32 bg-red-400'>
        <Image src={wcl} width={128} height={128} />
      </div>
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
  )
}

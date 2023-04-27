import Menu from './menu'
import { pages } from 'constants/layout/pages'

interface Props {
  currentSite: string
  reaction?: () => void
}

export default function UpperLayer(props: Props) {
  const { currentSite, reaction } = props
  const route = currentSite.split('/')[1].toLowerCase()

  return (
    <div className='flex flex-col items-start gap-3 align-top'>
      {pages.map((e) => {
        return (
          <Menu
            title={e.title}
            active={e.title === route ? true : false}
            route={e.title}
            key={e.title}
            reaction={reaction}
          ></Menu>
        )
      })}
    </div>
  )
}

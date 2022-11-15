import styles from 'styles/contact/contact.module.css'
import { Switcher } from '../type'

export default function Bulb(props: Partial<Switcher>) {
  const { isOpen } = props
  return (
    <div className={`h-full relative flex flex-col`}>
      <div className={`h-1/2 left-[50%] relative`}>
        <div className='w-1 h-1/5 bg-black'></div>
        <div
          className={`w-20 h-20 rounded-full bg-gray-700/60 absolute top-[100px] ${
            styles.bulb
          }
          ${isOpen ? styles.bulb_on : ''}
          `}
        >
          <div
            className={`${styles.backbone} ${isOpen ? styles.bulb_on : ''}`}
          ></div>
        </div>
        <div
          className={`absolute w-28 h-28 bg-white rounded-full ${
            styles.bulb_light_on
          }
          ${isOpen ? styles.bulb_blur : ''}`}
        ></div>
      </div>
    </div>
  )
}

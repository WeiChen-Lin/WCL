import styles from 'styles/contact/switch/switch.module.css'
import { Switcher } from '../type'

export default function Switch(props: Switcher) {
  const { isOpen, onClick } = props

  return (
    <>
      <div className='w-full h-full items-center flex justify-center'>
        <label className={`bg-black w-20 h-24 rounded-md p-5 ${styles.label}`}>
          <input className='hidden' />
          <div
            className={`${styles.button} ${
              isOpen ? styles.open : styles.close
            }`}
            onClick={onClick}
          >
            <div
              className={`${styles.light} ${isOpen ? styles.light_on : ''}`}
            ></div>
            <div className={`${styles.dots}`}></div>
            <div className={`${styles.characters}`}></div>
            <div
              className={`${styles.shine} ${isOpen ? 'opacity-100' : ''}`}
            ></div>
            <div
              className={`${styles.shadow} ${
                isOpen ? styles.shadow_close : ''
              }`}
            ></div>
          </div>
        </label>
      </div>
    </>
  )
}

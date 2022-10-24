import styles from 'styles/contact/contact.module.css'

export default function ContactPage() {
  return (
    <div className={`h-screen w-full relative overflow-hidden`}>
      <div className={`h-full relative flex flex-col`}>
        <div className={`h-1/2 left-[50%] relative`}>
          <div className='w-1 h-1/5 bg-black'></div>
          <div
            className={`w-20 h-20 rounded-full bg-gray-700/60 absolute top-[100px] ${styles.bulb} ${styles.bulb_on}`}
          ></div>
          <div
            className={`absolute w-28 h-28 bg-white rounded-full ${styles.blub_light_on}`}
          ></div>
        </div>
      </div>
    </div>
  )
}

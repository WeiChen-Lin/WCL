import styles from 'styles/contact/contact.module.css'
import { ContactInput, ContactTextField } from './input'
import SubmitBut from './button'
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
      <div
        className={`w-3/4 h-full absolute top-[25%] left-[12.5%] my-12 flex flex-col bg-white/10  ${styles.glassBg}`}
      >
        <div className='m-4'>
          <div className='w-12 h-12 bg-yellow-200/30 rounded absolute -top-2 -left-4 animate-bounce'></div>
          <p
            className={`relative text-3xl font-medium text-white/60 ${styles.title}`}
          >
            Contact With Me
          </p>
        </div>
        <div
          className={`w-full h-[40%] flex flex-wrap items-center justify-center`}
        >
          <ContactInput label={'name'} css={'w-1/2'} />
          <ContactInput label={'email'} css={'w-1/2'} />
          <ContactInput label={'title'} css={'w-full'} />
          <ContactTextField label={'message'} css={'w-full'} />
          <SubmitBut />
        </div>
      </div>
    </div>
  )
}

import styles from 'styles/contact/contact.module.css'
import { ContactInput, ContactTextField } from './input'
import SubmitBut from './button'
import useSendEmail from 'hooks/contact/sendEmail'
import { ChangeEvent, useState } from 'react'

export interface Email {
  name: string
  email: string
  title: string
  message: string
}

export default function ContactPage() {
  const [email, setEmail] = useState<Email>({
    name: '',
    email: '',
    title: '',
    message: ''
  })

  const handleEmailInput = (e: ChangeEvent, label: string) => {
    const target: Partial<HTMLInputElement> | Partial<HTMLTextAreaElement> =
      e.target

    setEmail((prev) => ({
      ...prev,
      [label]: target.value
    }))
  }

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
          <ContactInput
            label={'name'}
            css={'w-1/2'}
            onChange={(e) => {
              handleEmailInput(e, 'name')
            }}
          />
          <ContactInput
            label={'email'}
            css={'w-1/2'}
            onChange={(e) => {
              handleEmailInput(e, 'email')
            }}
          />
          <ContactInput
            label={'title'}
            css={'w-full'}
            onChange={(e) => {
              handleEmailInput(e, 'title')
            }}
          />
          <ContactTextField
            label={'message'}
            css={'w-full'}
            onChange={(e) => {
              handleEmailInput(e, 'message')
            }}
          />
          <SubmitBut email={email} />
        </div>
      </div>
    </div>
  )
}

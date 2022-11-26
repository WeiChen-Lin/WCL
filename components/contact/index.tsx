import styles from 'styles/contact/contact.module.css'
import { ContactInput, ContactTextField } from './input'
import SubmitBut from './button'
import { useState } from 'react'
import Switch from './switch'
import Bulb from './bulb'
import useSendEmail from 'hooks/contact/sendEmail'

export interface Email {
  name: string
  email: string
  title: string
  message: string
}

export default function ContactPage() {
  const {
    isSending,
    isOverflow,
    currentText,
    email,
    handleClick,
    handleEmailInput
  } = useSendEmail()

  const [isOpen, setIsopen] = useState<boolean>(false)

  const handleIsOpen = () => {
    setIsopen((prev) => !prev)
  }

  return (
    <div className='h-screen w-full relative overflow-hidden'>
      <Bulb isOpen={isOpen} />
      <div
        className={`w-3/4 h-full absolute top-[25%] left-[12.5%] my-12 flex flex-col bg-white/10  ${
          styles.glassBg
        } transition-all duration-1000
        ${isOpen ? 'opacity-100' : 'opacity-0'}`}
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
            css={'w-1/2 mb-6'}
            onChange={(e) => {
              handleEmailInput(e, 'name')
            }}
            value={email.name}
          />
          <ContactInput
            label={'email'}
            css={'w-1/2 mb-6'}
            onChange={(e) => {
              handleEmailInput(e, 'email')
            }}
            value={email.email}
          />
          <ContactInput
            label={'title'}
            css={'w-full mb-6'}
            onChange={(e) => {
              handleEmailInput(e, 'title')
            }}
            value={email.title}
          />
          <ContactTextField
            label={'message'}
            css={'w-full mb-12'}
            onChange={(e) => {
              handleEmailInput(e, 'message')
            }}
            value={email.message}
          />
          <SubmitBut
            isSending={isSending}
            isOverflow={isOverflow}
            currentText={currentText}
            handleClick={handleClick}
          />
        </div>
      </div>
      <div className='absolute bottom-4 left-3 bg-black w-20 h-24'>
        <Switch isOpen={isOpen} onClick={handleIsOpen} />
      </div>
    </div>
  )
}

import { useState } from 'react'
import Confettis from './confettis'
import SuccessText from './appearWord'
import SubmitText from './disAppearWord'
import Loading from './loading'
import { Email } from 'components/contact'
import useSendEmail from 'hooks/contact/sendEmail'

export default function SubmitBut(props: { email: Email }) {
  const { email } = props
  const { currentText, isSending, isOverflow, handleClick } =
    useSendEmail(email)

  const Status: { [key: string]: JSX.Element } = {
    SubmitText: <SubmitText width={isSending} />,
    Loading: <Loading />,
    Confettis: <Confettis />,
    SuccessText: <SuccessText width={isSending} />
  }

  return (
    <>
      <button
        className={`bg-gray-300 rounded-full cursor-pointer h-10 item-center 
        px-6 py-2 relative flex mt-5 transition-all ${
          isSending ? 'w-32' : 'w-24'
        }
        ${isOverflow ? 'overflow-hidden' : ''}`}
        onClick={handleClick}
      >
        {Status[currentText]}
      </button>
    </>
  )
}

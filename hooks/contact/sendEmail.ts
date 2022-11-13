import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { Email } from 'components/contact'
import { useState } from 'react'

const asyncSettimeout = (sec: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, sec)
  })
}

export default function useSendEmail(email: Email) {
  const [currentText, setCurrentText] = useState('SubmitText')
  const [isSending, setIsSending] = useState(true)
  const [isOverflow, setIsOverflow] = useState(true)

  const serviceID = 'send_email_service'
  const templateID = 'template_rhcy0f5'
  const publicKey = '7LuTZz6u23fkqciNY'

  const templateParams = {
    from_name: email.name,
    message: email.message,
    reply_email: email.email,
    title: email.title
  }

  const handleClick = async () => {
    setIsSending((prev) => !prev)

    await asyncSettimeout(500).then(() => {
      setCurrentText('Loading')
    })
    await emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(async (res: EmailJSResponseStatus) => {
        if (res.status === 200) {
          setIsSending((prev) => !prev)
          setIsOverflow((prev) => !prev)
          setCurrentText('Confettis')
          await asyncSettimeout(1500).then(() => {
            setIsOverflow((prev) => !prev)
            setCurrentText('SuccessText')
          })
          await asyncSettimeout(2000).then(() => {
            setCurrentText('SubmitText')
          })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return { isSending, isOverflow, currentText, handleClick }
}

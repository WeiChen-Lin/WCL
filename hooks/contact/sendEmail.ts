import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { useState, ChangeEvent } from 'react'

const asyncSettimeout = (sec: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, sec)
  })
}

export interface Email {
  name: string
  email: string
  title: string
  message: string
}

export default function useSendEmail() {
  const [currentText, setCurrentText] = useState('SubmitText')
  const [isSending, setIsSending] = useState(true)
  const [isOverflow, setIsOverflow] = useState(true)
  const [email, setEmail] = useState<Email>({
    name: '',
    email: '',
    title: '',
    message: ''
  })
  const serviceID = 'send_email_service'
  const templateID = 'template_rhcy0f5'
  const publicKey = '7LuTZz6u23fkqciNY'

  const templateParams = {
    from_name: email.name,
    message: email.message,
    reply_email: email.email,
    title: email.title
  }

  const handleEmailInput = (e: ChangeEvent, label: string) => {
    const target: Partial<HTMLInputElement> | Partial<HTMLTextAreaElement> =
      e.target

    setEmail((prev) => ({
      ...prev,
      [label]: target.value
    }))
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
          await asyncSettimeout(1500).then(async () => {
            setIsOverflow((prev) => !prev)
            setCurrentText('SuccessText')
            await asyncSettimeout(2000).then(() => {
              setCurrentText('SubmitText')
              setEmail({
                name: '',
                email: '',
                title: '',
                message: ''
              })
            })
          })
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return {
    isSending,
    isOverflow,
    currentText,
    email,
    handleClick,
    handleEmailInput
  }
}

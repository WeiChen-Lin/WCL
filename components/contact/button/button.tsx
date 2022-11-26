import Confettis from './confettis'
import SuccessText from './appearWord'
import SubmitText from './disAppearWord'
import Loading from './loading'
import { Email } from 'components/contact'

interface SubmitButProps {
  isSending: boolean
  isOverflow: boolean
  currentText: string
  handleClick: () => Promise<void>
}

export default function SubmitBut(props: SubmitButProps) {
  const { isSending, isOverflow, currentText, handleClick } = props

  const Status: { [key: string]: JSX.Element } = {
    SubmitText: <SubmitText width={isSending} />,
    Loading: <Loading />,
    Confettis: <Confettis />,
    SuccessText: <SuccessText />
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

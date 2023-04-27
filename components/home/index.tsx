import { ReactElement } from 'react'
import Footer from './footer'
import Myself from './myself'
import MoveImgs from './moveImgs'
import { useScreen } from 'hooks'

export default function HomePage(): ReactElement {
  const width = useScreen()

  return (
    <>
      <div className='flex-1 flex flex-col justify-center relative'>
        {width > 768 && <MoveImgs />}
        <Myself />
        <Footer />
      </div>
    </>
  )
}

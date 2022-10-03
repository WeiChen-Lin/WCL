import { ReactElement } from 'react'
import Footer from './footer'
import Myself from './myself'
import MoveImgs from './moveImgs'

export default function HomePage(): ReactElement {
  return (
    <>
      <div className='w-full min-h-screen relative'>
        <MoveImgs />
        <Myself />
      </div>
      <Footer />
    </>
  )
}

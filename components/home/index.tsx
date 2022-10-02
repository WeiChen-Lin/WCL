import { ReactElement } from 'react'
import Footer from './footer'
import Myself from './myself'

export default function HomePage(): ReactElement {
  return (
    <>
      <div className='w-full min-h-screen'>
        <Myself />
      </div>
      <Footer />
    </>
  )
}

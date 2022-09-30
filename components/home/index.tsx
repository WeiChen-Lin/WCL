import { ReactElement } from 'react'
import Footer from './footer/footer'
// import type { NextPage } from 'next'

export default function HomePage(): ReactElement {
  return (
    <div className='min-h-screen bg-slate-500'>
      <Footer />
    </div>
  )
}

import Menu from './menu'
import { pages } from 'constants/layout/pages'
import { useState } from 'react'

export default function UpperLayer() {
  return (
    <div className='flex flex-col items-start gap-3 align-top'>
      {pages.map((e) => {
        return <Menu title={e.title} active={e.active}></Menu>
      })}
    </div>
  )
}

import { Keyboard, Cable } from 'public/layout'
import { useState } from 'react'
import styles from 'styles/keyboard/keyboard.module.css'
import Key from './key'
import { ContactInput } from 'components/contact/input'

export default function KeyBoard() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div
      className={`absolute top-[17%] right-0 h-2/3 z-[10] ${styles.neo}
      ${isOpen ? 'w-3/4 opacity-100' : 'w-0'} transition-all duration-1000`}
    >
      <div
        className={`absolute w-10 h-32 bg-slate-200 rounded-l-lg block top-0 -left-9 p-1 cursor-pointer hover:opacity-70
        ${isOpen ? 'opacity-100' : 'opacity-40'}
        ${styles.neo_label}`}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <div className='w-7 h-7 mt-9'>
          <Keyboard />
        </div>
      </div>
      <div className='w-[150px] h-[210px] mx-auto relative'>
        <Cable />
        <div className='absolute w-96 h-12 bg-black top-[100px] -left-28'>
          <input></input>
        </div>
      </div>
      <div
        className={`w-[90%] mx-auto p-2 rounded-md flex flex-col bg-slate-700 ${
          isOpen ? '' : 'hidden'
        } ${styles.camo}`}
      >
        <div className='flex w-full justify-between mb-1 mx-auto'>
          <Key keyname='`' size={1} />
          <Key keyname='1' size={1} />
          <Key keyname='2' size={1} />
          <Key keyname='3' size={1} />
          <Key keyname='4' size={1} />
          <Key keyname='5' size={1} />
          <Key keyname='6' size={1} />
          <Key keyname='7' size={1} />
          <Key keyname='8' size={1} />
          <Key keyname='9' size={1} />
          <Key keyname='0' size={1} />
          <Key keyname='-' size={1} />
          <Key keyname='+' size={1} />
          <Key keyname='Back' size={1.5} />
        </div>
        <div className='flex w-full justify-between mb-1 mx-auto'>
          <Key keyname='tab' size={1.5} />
          <Key keyname='q' size={1} />
          <Key keyname='w' size={1} />
          <Key keyname='e' size={1} />
          <Key keyname='r' size={1} />
          <Key keyname='t' size={1} />
          <Key keyname='y' size={1} />
          <Key keyname='u' size={1} />
          <Key keyname='i' size={1} />
          <Key keyname='o' size={1} />
          <Key keyname='p' size={1} />
          <Key keyname='[' size={1} />
          <Key keyname=']' size={1} />
          <Key keyname='\' size={1.5} />
        </div>
        <div className='flex w-full justify-between mb-1 mx-auto'>
          <Key keyname='CAPS' size={2} />
          <Key keyname='a' size={1} />
          <Key keyname='s' size={1} />
          <Key keyname='d' size={1} />
          <Key keyname='f' size={1} />
          <Key keyname='g' size={1} />
          <Key keyname='h' size={1} />
          <Key keyname='j' size={1} />
          <Key keyname='k' size={1} />
          <Key keyname='l' size={1} />
          <Key keyname=';' size={1} />
          <Key keyname="'" size={1} />
          <Key keyname='R' size={2} />
        </div>
        <div className='flex w-full justify-between mb-1 mx-auto'>
          <Key keyname='shift' size={2} />
          <Key keyname='z' size={1} />
          <Key keyname='x' size={1} />
          <Key keyname='c' size={1} />
          <Key keyname='v' size={1} />
          <Key keyname='b' size={1} />
          <Key keyname='n' size={1} />
          <Key keyname='m' size={1} />
          <Key keyname=',' size={1} />
          <Key keyname='.' size={1} />
          <Key keyname='/' size={1} />
          <Key keyname='SHIFT' size={2} />
        </div>
      </div>
    </div>
  )
}

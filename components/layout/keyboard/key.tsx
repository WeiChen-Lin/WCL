import styles from 'styles/keyboard/keyboard.module.css'

interface KeyProp {
  keyname: string
  size: 1 | 1.5 | 2 | 3
}

const sizeSetting: { [key: number]: { outside: string; inside: string } } = {
  1: { outside: 'w-16 h-16', inside: 'w-12 h-12' },
  1.5: { outside: 'w-24 h-16', inside: 'w-[76px] h-12' },
  2: { outside: 'w-32 h-16', inside: 'w-[112px] h-12' },
  3: { outside: 'w-48 h-16', inside: 'w-[172px] h-12' }
}

export default function Key(props: KeyProp) {
  const { keyname, size } = props

  return (
    <div
      className={`relative ${sizeSetting[size].outside} rounded-xl 
    bg-gradient-to-br	 from-slate-400	to-black
    cursor-pointer shadow-zinc-600 border-2	border-black mr-1
    hover:scale-95 hover:translate-y-1`}
    >
      <div
        className={`absolute top-1 left-1 ${sizeSetting[size].inside} rounded-xl 
        bg-gradient-to-br from-slate-700	to-slate-400 pt-1 pl-2 uppercase
        border-l-2 border-t-2 border-slate-700`}
      >
        <span className='text-white tracking-wider'>{keyname}</span>
      </div>
    </div>
  )
}

import styles from 'styles/contact/button/loading.module.css'

export default function Loading() {
  return (
    <ul className='relative m-auto w-9 h-3'>
      <li
        className={`absolute w-2 h-2 bg-slate-400 rounded-full ${styles.custom_bounce}`}
        style={{
          '--x': `0ms`,
          left: '2px'
        }}
      ></li>
      <li
        className={`absolute w-2 h-2 bg-slate-400 rounded-full ${styles.custom_bounce}`}
        style={{
          '--x': `50ms`,
          left: '12px'
        }}
      ></li>
      <li
        className={`absolute w-2 h-2 bg-slate-400 rounded-full ${styles.custom_bounce}`}
        style={{
          '--x': `100ms`,
          left: '22px'
        }}
      ></li>
    </ul>
  )
}

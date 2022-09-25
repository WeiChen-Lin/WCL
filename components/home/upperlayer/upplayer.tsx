import styles from 'styles/home/upperlayer/upperlayer.module.css'

export default function Upperlayer() {
  return (
    <ul className='relative flex flex-col justify-center items-center gap-8'>
      <li className='relative'>
        <a className={`${styles.textAnimate} before:content-["Home"]`}>Home</a>
      </li>
    </ul>
  )
}

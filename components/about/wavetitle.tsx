import styles from 'styles/about/wavetitle/wavetitle.module.css'
import Image from 'next/image'
import bg from 'public/about/bg.jpg'
import { ReactElement } from 'react'

export default function WaveTitle() {
  return <h1 className={`${styles.wavetitle}`}>About me</h1>
}

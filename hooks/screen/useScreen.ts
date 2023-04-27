import { useEffect, useState } from 'react'

export default function useScreen() {
  const [currentWidth, setCurrentWidth] = useState(320)

  useEffect(() => {
    const resizeScreen = () => {
      setCurrentWidth(typeof window !== 'undefined' ? window.innerWidth : 320)
    }

    window?.addEventListener('resize', resizeScreen)

    setCurrentWidth(typeof window !== 'undefined' ? window.innerWidth : 320)

    return () => window?.removeEventListener('resize', resizeScreen)
  }, [])

  return currentWidth
}

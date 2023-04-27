import { useEffect, useState } from 'react'

export default function useScreen() {
  const initWidth = typeof window !== 'undefined' ? window.innerWidth : 320

  const [currentWidth, setCurrentWidth] = useState(initWidth)

  useEffect(() => {
    const resizeScreen = () => {
      setCurrentWidth(window?.innerWidth ?? 0)
    }
    window?.addEventListener('resize', resizeScreen)

    return () => window?.removeEventListener('resize', resizeScreen)
  }, [])

  return currentWidth
}

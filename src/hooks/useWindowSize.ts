import { useEffect, useState } from 'react'
import { isBrowser } from '../util'

export function useWindowSize() {
  function getSize() {
    return isBrowser()
      ? {
          width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
          height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        }
      : { width: 1920, height: 1080 }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isBrowser()) {
      return
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

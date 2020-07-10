import { useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
  restored: boolean
}

const isBrowser = typeof window !== `undefined`

function getScrollPosition(restored = true): ScrollPosition {
  return isBrowser ? { x: window.pageXOffset, y: window.pageYOffset, restored } : { x: 0, y: 0, restored }
}

export function useScrollPosition(): ScrollPosition {
  const [position, setScrollPosition] = useState<ScrollPosition>(getScrollPosition(false))

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let requestRunning: number | null = null
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition())
          requestRunning = null
        })
      }
    }

    if (isBrowser) {
      handleScroll()

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}

export function useScrollXPosition(): number {
  const { x } = useScrollPosition()
  return x
}

export function useScrollYPosition(): number {
  const { y } = useScrollPosition()
  return y
}

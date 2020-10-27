import { useScrollPosition } from './useScrollPosition'
import { useWindowSize } from './useWindowSize'

export interface ScrollTransition {
  scrollX: number
  scrollY: number
  scrollRestored: boolean
  t: number
}

export function useScrollTransition(start: number, end: number): ScrollTransition {
  const { width, height } = useWindowSize()
  const { x, y, restored } = useScrollPosition()

  const [scrollX, scrollY] = [x / (width || 1), y / (height || 1)]

  const t = Math.min(1, Math.max(0, (scrollY - start) / (end - start)))

  return {
    scrollX,
    scrollY,
    scrollRestored: restored,
    t
  }
}

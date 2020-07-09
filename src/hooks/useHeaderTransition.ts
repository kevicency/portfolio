import { useScrollPosition } from './useScrollPosition'
import { useWindowSize } from './useWindowSize'

export interface TransitionProps {
  cw: number
  ch: number
  scrollX: number
  scrollY: number
  t: number
}

export function useHeaderTransition(start: number, end: number, maxWidth = Infinity): TransitionProps {
  const { width, height } = useWindowSize()
  const { x, y } = useScrollPosition()

  const [scrollX, scrollY] = [x / (width || 1), y / (width || 1)]

  const t = Math.min(1, Math.max(0, (scrollY - start) / (end - start)))

  return {
    cw: Math.min(width, maxWidth),
    ch: height,
    scrollX,
    scrollY,
    t
  }
}

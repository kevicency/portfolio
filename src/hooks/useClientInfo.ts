import { useWindowSize } from './useWindowSize'

export interface ClientInfo {
  cw: number
  ch: number
  cmax: number
  cmin: number
  portrait: boolean
  landscape: boolean
}

export function useClientInfo(maxWidth: number): ClientInfo {
  const { height, ...size } = useWindowSize()
  const width = Math.min(size.width, maxWidth)

  return {
    cw: width,
    ch: height,
    cmax: width > height ? width : height,
    cmin: width < height ? width : height,
    portrait: width < height,
    landscape: width >= height
  }
}

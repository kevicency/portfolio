import { keyframes } from '@emotion/core'

export const neonText = (color: string, scale = 1) => {
  const size = 5 * scale
  const sizes = [size * 1, size * 2, size * 3, size * 4, size * 7, size * 8, size * 10, size * 15]
  const from = sizes.map((s, i) => `0 0 ${s}px ${i < 3 ? '#fff' : color}`).join(', ')
  const to = sizes.map((s, i) => `0 0 ${s * 2}px ${i < 3 ? '#fff' : color}`).join(', ')

  return keyframes`
    from {
    text-shadow: ${from}
    }
    to {
      text-shadow: ${to}
    }
  `
}

import { css } from '@emotion/core'
import { neonText, neonText2 } from './animations'
import { colors, dimensions, fonts } from './variables'

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

export const neonLink = (color: string, scale?: number, delay = 0.15) => css`
  color: ${color};
  transition: color 0.25s ease;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${colors.white};
    animation: ${neonText(color, scale)} 1.5s ease-in-out infinite alternate;
    animation-delay: ${delay}s;
    text-decoration: none;
  }
`

export const neonLink2 = (color: string, scale?: number, delay = 0.15) => css`
  color: ${color};
  transition: color 0.25s ease;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${colors.white};
    animation: ${neonText2(color, scale)} 5s ease-in-out infinite alternate;
    animation-delay: ${delay}s;
    text-decoration: none;
  }
`

export const neonTextShadow = (color: string) => {
  return css`
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 8px ${color}, 0 0 16px ${color}, 0 0 32px ${color};
  `
}

export const fontFamily = (name: keyof typeof fonts) => {
  return css`
    font-family: ${fonts[name]};
  `
}

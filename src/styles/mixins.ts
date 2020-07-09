import { css } from '@emotion/core'
import { neonText } from './animations'
import { colors, dimensions } from './variables'

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

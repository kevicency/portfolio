import styled from '@emotion/styled'
import { modularScale } from 'polished'
import { fontFamily } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

export const SectionTitle = styled.h2`
  color: ${colors.magenta};
  font-size: ${modularScale(4)};
  ${fontFamily('roadRage')};
  text-align: center;

  margin: 0;
  padding: 1.33em 0 1em;

  @media screen and (min-width: ${breakpoints.sm}px) {
    font-size: ${modularScale(5)};
  }
  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: ${modularScale(5.5)};
  }
  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: ${modularScale(6)};
  }
  @media screen and (min-width: ${breakpoints.xl}px) {
    font-size: ${modularScale(7)};
  }
`

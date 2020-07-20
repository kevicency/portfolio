/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import React from 'react'
import { useWindowSize } from '../hooks'
import { colors } from '../styles/variables'
import mountainsWithSun from './assets/mountains_with_sun.svg'

const skyRatio = 55
const { teal, bg } = colors

const Container = styled.div`
  flex: 1;
`
const Sky = styled.div`
  position: relative;
  height: ${skyRatio}vh;
  width: 100%;

  background: ${colors.bg};
  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.purple} 100%);
`
const Content = styled.div`
  position: relative;
  height: ${100 - skyRatio}vh;
  width: 100%;

  background: ${colors.bg};
  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgAlt} 100%);
`

const GridlinesPerspective: React.FC = ({ children }) => {
  const { width, height } = useWindowSize()

  return (
    <div
      css={css`
        background-size: cover;
        height: ${100 - skyRatio}vh;
        overflow: hidden;
        perspective: ${Math.max(width * 0.625, height) || 1200}px;
      `}
    >
      {children}
    </div>
  )
}
const Gridlines = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0px,
      ${rgba(teal, 0.5)} 0%,
      ${rgba(teal, 0.5)} 3px,
      rgba(0, 0, 0, 0) 0px
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, ${rgba(teal, 0.5)} 0%, ${rgba(teal, 0.5)} 3px, rgba(0, 0, 0, 0) 0px);
  background-size: 3em 3em, 3em 3em;
  background-color: transparent;
  border-top: 5px solid ${teal};
  box-shadow: 0 -25px 75px ${rgba(teal, 0.66)};
  height: 100vh;
  transform: scale(1.5) rotateX(75deg);
  position: absolute;
  top: -70%;
  width: 100%;

  &:after {
    background: linear-gradient(to bottom, ${rgba(bg, 0.5)} 50%, ${rgba(bg, 1)} 97.5%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`

export const HeroSection: React.FC = () => (
  <Container>
    <Sky>
      <img
        src={mountainsWithSun}
        alt="mountains with sun"
        css={css`
          position: absolute;
          bottom: -1px;
          width: 100%;
          max-height: 100%;
          object-fit: cover;
          z-index: 10;
        `}
      />
    </Sky>
    <Content>
      <GridlinesPerspective>
        <Gridlines />
      </GridlinesPerspective>
    </Content>
  </Container>
)

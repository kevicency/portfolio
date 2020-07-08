/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import React from 'react'
import { useHeaderTransition } from '../hooks'
import { colors } from '../styles/variables'
import { easeInOutQuad } from '../tween'
import claimName from './assets/claim_name.svg'
import logo from './assets/logo.svg'
import logoShadow from './assets/logo_shadow.svg'
import mountainsWithSun from './assets/mountains_with_sun.svg'

const { teal, bg } = colors
const skyRatio = 55

const logoWidth = 54
const logoHeight = 48
const logoRatio = logoHeight / logoWidth
const nameWidth = 162
const nameHeight = 48
const nameRatio = nameHeight / nameWidth

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

const GridlinesPerspective = styled.div`
  background-size: cover;
  height: ${100 - skyRatio}vh;
  overflow: hidden;
  perspective: 1200px;
`
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
  transform: scale(1.4) rotateX(70deg);
  position: absolute;
  top: -70%;
  width: 100%;

  &:after {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 95%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`

const Header: React.FC = () => {
  const { t, cw, ch } = useHeaderTransition(0.01, 0.45)

  return (
    <span>
      <div
        css={css`
          position: fixed;
          top: 0;
          height: 60px;
          width: 100%;
          z-index: 999;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            height: 60px;
            width: 100%;
            background: ${bg};
            opacity: ${easeInOutQuad(t, 0, 1, 1)};
          `}
        />
        <img
          src={logo}
          alt="logo"
          css={css`
            position: absolute;
            top: ${easeInOutQuad(t, ch * 0.44, 6, 1)}px;
            left: ${easeInOutQuad(t, cw * 0.34, cw * 0.25, 1)}px;
            height: ${easeInOutQuad(t, cw * 0.32 * logoRatio, logoHeight, 1)}px;
          `}
        />
        <img
          src={logoShadow}
          alt="logo shadow"
          css={css`
            position: absolute;
            top: ${easeInOutQuad(t, ch * 0.8, cw * 0.05, 1)}px;
            left: ${easeInOutQuad(t, cw * 0.265, cw * 0.25 + logoWidth / 2 - nameWidth / 2, 1)}px;
            height: ${easeInOutQuad(t, cw * 0.48 * nameRatio, nameHeight, 1)}px;
            opacity: ${t >= 0.8 ? Math.max(0, (0.9 - t) * 10) : 1};
          `}
        />
        <img
          src={claimName}
          alt="Kevin Mees"
          css={css`
            top: ${easeInOutQuad(t, ch * 0.49, 6, 1)}px;
            left: ${easeInOutQuad(t, cw * 0.26, cw * 0.25 + logoWidth, 1)}px;
            height: ${easeInOutQuad(t, cw * 0.48 * nameRatio, nameHeight, 1)}px;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 10%;
          width: 50%;
          max-height: ${skyRatio}vh;
          left: 25%;
          z-index: 100;
        `}
      />
    </span>
  )
}

export const HeaderSection: React.FC = () => (
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
    <Header />
  </Container>
)

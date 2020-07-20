/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { modularScale, rgba } from 'polished'
import React from 'react'
import { useHeaderTransition, useWindowSize } from '../hooks'
import { colors } from '../styles/variables'
import { easeOutQuad } from '../tween'
import backend from './assets/skills_backend.svg'
import backend2 from './assets/skills_backend2.svg'
import skillsFrontend from './assets/skills_frontend.svg'
import frontend2 from './assets/skills_frontend2.svg'
import sunPurple from './assets/sun_city.svg'

const skyRatio = 33
const { teal, bg, purple } = colors

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  background: ${bg};
`

const Sky = styled.div`
  width: 100%;
  height: ${skyRatio}vh;
`

const Sun = styled.div`
  position: absolute;
  left: 18%;
  top: -45%;
  width: 64%;
  height: 100%;
  background: url('${sunPurple}');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
`

const Content = styled.div`
  position: relative;
  height: ${100 - skyRatio}vh;
  width: 100%;

  background: ${colors.bg};
  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgAlt} 100%);

  &:after {
    background: linear-gradient(to bottom, ${rgba(bg, 0)} 75%, ${rgba(bg, 1)} 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
    bottom: -1%;
  }
`

const GridlinesPerspective: React.FC = ({ children }) => {
  const { width, height } = useWindowSize()

  return (
    <div
      css={css`
        background-size: cover;
        height: ${100 - skyRatio}vh;
        overflow: hidden;
        perspective: ${0.5 * (Math.max(width * 0.625, height) || 1200)}px;
      `}
    >
      {children}
    </div>
  )
}
const gridlineColor = colors.purple
const Gridlines = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0px,
      ${rgba(gridlineColor, 0.66)} 0%,
      ${rgba(gridlineColor, 0.66)} 3px,
      rgba(0, 0, 0, 0) 0px
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, ${rgba(gridlineColor, 0.66)} 0%, ${rgba(
  gridlineColor,
  0.5
)} 3px, rgba(0, 0, 0, 0) 0px);
  background-size: 2em 2em, 2em 2em;
  background-color: transparent;
  /* border-top: 5px solid ${teal}; */
  box-shadow: 0 70px 25px 15px ${rgba(purple, 1)};
  height: 100vh;
  transform: scale(1.0) rotateX(80deg);
  position: absolute;
  top: -25%;
  width: 20%;
  margin: 0 40%;

  &:after {
    background: linear-gradient(to top, ${rgba(bg, 0)} 33%, ${rgba(bg, 1)} 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`
const gridlineAltColor = colors.yellow
const GridlinesAlt = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0px,
      ${rgba(gridlineAltColor, 0.66)} 0%,
      ${rgba(gridlineAltColor, 0.66)} 4px,
      rgba(0, 0, 0, 0) 0px
    ),
    linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, ${rgba(gridlineAltColor, 0.66)} 0%, ${rgba(
  gridlineAltColor,
  0.5
)} 4px, rgba(0, 0, 0, 0) 0px);
  background-size: 49%;
  background-position-x: 0.5%;
  background-color: transparent;
  /* border-top: 5px solid ${teal}; */
  box-shadow: 0 70px 25px 15px ${rgba(purple, 1)};
  height: 100vh;
  transform: scale(1.0) rotateX(80deg);
  position: absolute;
  top: -25%;
  width: 20%;
  margin: 0 40%;

  &:after {
    background: linear-gradient(to top, ${rgba(bg, 0)} 33%, ${rgba(bg, 1)} 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`

export const SkillsSection: React.FC = () => {
  const { t, scrollY } = useHeaderTransition(0.6, 0.9)

  console.log({ t, scrollY })

  return (
    <Container>
      <Sky />
      <Content>
        <Sun>
          <h2
            css={css`
              position: absolute;
              top: 15%;
              width: 100%;
              text-align: center;
              font-family: 'Road Rage';
              font-size: ${modularScale(6)};
              color: ${colors.magenta};
              opacity: 0.8;
            `}
          >
            Skills
          </h2>
          <div
            css={css`
              position: absolute;
              display: flex;
              justify-content: space-around;
              top: 45%;
              width: 100%;
              text-align: center;
              font-family: 'Streamster';
              font-size: ${modularScale(3.5)};
              color: ${colors.teal};
              opacity: ${easeOutQuad(t, 0, 1, 1)};
            `}
          >
            <span>Frontend</span>
            <span>Backend</span>
          </div>
        </Sun>
        <GridlinesPerspective>
          <GridlinesAlt />
        </GridlinesPerspective>
        <div
          css={css`
            position: absolute;
            bottom: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
          `}
        >
          <img
            src={skillsFrontend}
            alt=""
            css={css`
              position: absolute;
              bottom: 5%;
              left: ${easeOutQuad(t, -33, 3, 1)}%;
              width: 30%;
            `}
          />
          <img
            src={frontend2}
            alt=""
            css={css`
              position: absolute;
              top: 13%;
              left: ${easeOutQuad(t, -33, 32, 1)}%;
              width: 15%;
            `}
          />
          <img
            src={backend}
            alt=""
            css={css`
              position: absolute;
              bottom: 5%;
              right: ${easeOutQuad(t, -33, 3, 1)}%;
              width: 30%;
            `}
          />
          <img
            src={backend2}
            alt=""
            css={css`
              position: absolute;
              top: 13%;
              right: ${easeOutQuad(t, -33, 32, 1)}%;
              width: 15%;
            `}
          />
        </div>
      </Content>
    </Container>
  )
}

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Color from 'color'
import logoWithClaim from '../content/assets/logo_with_claim.svg'
import mountainsWithSun from '../content/assets/mountains_with_sun.svg'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables'

const skyRatio = 55

const BGContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
const BGSky = styled.div`
  position: relative;
  height: ${skyRatio}vh;
  width: 100%;

  background: ${colors.bg};
  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.purple} 100%);
`
const BGBottom = styled.div`
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
const Gridlines = ((teal: Color, magenta: Color) => styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0px,
      ${teal.fade(0.5).string()} 0%,
      ${teal.fade(0.5).string()} 3px,
      rgba(0, 0, 0, 0) 0px
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0px,
      ${teal.fade(0.5).string()} 0%,
      ${teal.fade(0.5).string()} 3px,
      rgba(0, 0, 0, 0) 0px
    );
  background-size: 3em 3em, 3em 3em;
  background-color: transparent;
  border-top: 5px solid ${teal.string()};
  box-shadow: 0 -25px 75px ${teal.fade(0.33).string()};
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

  &:before {
    background: radial-gradient(
      ellipse at center,
      ${magenta.fade(0.33).string()} 0%,
      ${new Color(colors.bg).fade(0.33).string()} 3%,
      transparent 33%
    );
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: -30%;
  }
`)(new Color(colors.teal), new Color(colors.magenta))

const Background: React.FC = () => (
  <BGContainer>
    <BGSky>
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
    </BGSky>
    <BGBottom>
      <GridlinesPerspective>
        <Gridlines />
      </GridlinesPerspective>
      <img
        src={logoWithClaim}
        alt="mountains with sun"
        css={css`
          position: absolute;
          bottom: 20%;
          width: 50%;
          max-height: 125%;
          left: 25%;
          z-index: 10;
        `}
      />
    </BGBottom>
  </BGContainer>
)

const IndexPage = () => (
  <IndexLayout>
    <Background />
  </IndexLayout>
)

export default IndexPage

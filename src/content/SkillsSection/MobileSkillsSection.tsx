/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { modularScale, rgba } from 'polished'
import React from 'react'
import { SectionTitle } from '../../components/SectionTitle'
import { useScrollTransition } from '../../hooks'
import { fontFamily } from '../../styles/mixins'
import { colors, heights } from '../../styles/variables'
import backend from '../assets/skills_backend.svg'
import backend2 from '../assets/skills_backend2.svg'
import frontend from '../assets/skills_frontend.svg'
import frontend2 from '../assets/skills_frontend2.svg'
import sunCity from '../assets/sun_city2.svg'

const { teal, bg, purple } = colors

const Container = styled.div`
  position: relative;
  flex: 1;
  min-height: 100vh;
  background: ${bg};
  padding-top: ${heights.header * 1.25}px;
`

const Sky = styled.div`
  position: relative;
  width: 100%;
`

const Sun = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
`

const Content = styled.div`
  position: relative;
  width: 100%;

  background: ${colors.bg};
  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgAlt} 100%);
  padding-bottom: 7.5vh;

  &:after {
    background: linear-gradient(to bottom, ${rgba(bg, 0)} 0%, ${rgba(bg, 1)} 100%);
    content: '';
    height: 15vh;
    position: absolute;
    width: 100%;
    bottom: 0%;
  }
`
const Subtitle = styled.div`
  text-align: center;
  ${fontFamily('streamster')};
  font-size: ${modularScale(4)};
  color: ${colors.teal};
  padding: 1em 0 0 0;
`
const Skills = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > img {
    flex: 1 0 350px;
    padding: 2em 2em;
    width: auto;
    max-height: 75vh;
  }
`

export const MobileSkillsSection: React.FC = () => {
  const { t } = useScrollTransition(0.6, 0.9)

  return (
    <Container>
      <Sky>
        <Sun src={sunCity} />
        <SectionTitle
          css={css`
            position: absolute;
            width: 100%;
            bottom: 45%;
            padding: 0;
          `}
        >
          Skills
        </SectionTitle>
      </Sky>
      <Content>
        <Subtitle>Frontend</Subtitle>
        <Skills>
          <img src={frontend} alt="" />
          <img src={frontend2} alt="" />
        </Skills>
        <Subtitle>Backend</Subtitle>
        <Skills>
          <img src={backend} alt="" />
          <img src={backend2} alt="" />
        </Skills>
      </Content>
    </Container>
  )
}
export default MobileSkillsSection

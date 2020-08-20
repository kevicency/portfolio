import styled from '@emotion/styled'
import { modularScale } from 'polished'
import * as React from 'react'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { fontFamily } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const Container = styled.div`
  margin: 0 -1.5em;

  @media screen and (min-width: ${breakpoints.lg}em) {
    margin: 0 -3.5em;
  }

  background: linear-gradient(180deg, ${colors.purpleDark} 0%, ${colors.bg} 100%);
`

const Title = styled.h2`
  color: ${colors.magenta};
  font-size: ${modularScale(6)};
  ${fontFamily('roadRage')};
  text-align: center;

  margin-top: 0;
  margin-bottom: ${modularScale(0.66)};
`

export const ExperienceSection: React.FC = () => (
  <Container>
    <Title>Experience</Title>
    <ExperienceTimeline />
  </Container>
)

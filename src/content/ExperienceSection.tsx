import styled from '@emotion/styled'
import * as React from 'react'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { SectionTitle } from '../components/SectionTitle'
import { colors } from '../styles/variables'

const Container = styled.div`
  position: relative;

  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgAlt} 75%, ${colors.bg} 100%);
`

export const ExperienceSection: React.FC = () => (
  <Container>
    <SectionTitle>Experience</SectionTitle>
    <ExperienceTimeline />
  </Container>
)

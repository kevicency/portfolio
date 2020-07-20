/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Section } from 'react-scroll-section'
import { Header } from '../components/Header'
import { HeroSection } from '../content/HeroSection'
import { ProjectsSection } from '../content/ProjectsSection'
import { SkillsSection } from '../content/SkillsSection'
import { Html } from '../layouts'
import { colors } from '../styles/variables'

const Placeholder = styled.div<{ color: string }>`
  height: 100vh;
  width: 100%;
  background: ${props => props.color};
`

const IndexPage = () => (
  <Html>
    <Header />
    <Section id="home">
      <HeroSection />
    </Section>
    <Section id="skills">
      <SkillsSection />
    </Section>
    <Section id="projects">
      <ProjectsSection />
    </Section>
    <Section id="experience">
      <Placeholder color={colors.azure} />
    </Section>
  </Html>
)

export default IndexPage

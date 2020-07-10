/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Section } from 'react-scroll-section'
import { Header } from '../components/Header'
import { HeroSection } from '../content/HeroSection'
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
      <Placeholder color={colors.purple} />
    </Section>
    <Section id="projects">
      <Placeholder color={colors.yellow} />
    </Section>
    <Section id="experience">
      <Placeholder color={colors.azure} />
    </Section>
  </Html>
)

export default IndexPage

/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Section } from 'react-scroll-section'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ExperienceSection } from '../content/ExperienceSection'
import { HeroSection } from '../content/HeroSection'
import { ProjectsSection } from '../content/ProjectsSection'
import { SkillsSection } from '../content/SkillsSection'
import { Html } from '../layouts'

const IndexPage = () => (
  <Html>
    <Header />
    <Section id="home">
      <HeroSection />
    </Section>
    <Section id="skills">
      <SkillsSection />
    </Section>
    <Section id="experience">
      <ExperienceSection />
    </Section>
    <div style={{ display: 'none' }}>
      <Section id="projects">
        <ProjectsSection />
      </Section>
    </div>
    <Footer />
  </Html>
)

export default IndexPage

/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
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
    <HeroSection />
    <Placeholder color={colors.magenta} />
    <Placeholder color={colors.teal} />
    <Placeholder color={colors.azure} />
  </Html>
)

export default IndexPage

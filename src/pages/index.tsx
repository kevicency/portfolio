/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { HeaderSection } from '../content/HeaderSection'
import { Html } from '../layouts'
import { colors } from '../styles/variables'

const Placeholder = styled.div<{ color: string }>`
  height: 100vh;
  width: 100%;
  background: ${props => props.color};
`

const IndexPage = () => (
  <Html>
    <HeaderSection />
    <Placeholder color={colors.magenta} />
    <Placeholder color={colors.teal} />
    <Placeholder color={colors.azure} />
  </Html>
)

export default IndexPage

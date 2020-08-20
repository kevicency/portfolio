import styled from '@emotion/styled'
import { modularScale } from 'polished'
import React from 'react'
import { fontFamily, neonLink } from '../styles/mixins'
import { colors } from '../styles/variables'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;

  padding: ${modularScale(8)} ${modularScale(1.5)} ${modularScale(4)};
`

const Title = styled.div`
  ${fontFamily('roadRage')};
  font-size: ${modularScale(4)};
  color: ${colors.magenta};
  margin-bottom: 0.5em;
`
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${modularScale(3)};
`
const SocialLink = styled.a`
  font-size: ${modularScale(2)};
  padding: 0 0.5em;

  ${neonLink(colors.teal, 0.5)};
`

export const Footer: React.FC = () => {
  return (
    <Container>
      <Title>Kevin Mees</Title>
      <SocialLinks>
        <SocialLink href="https://github.com/kmees" target="_blank">
          <span className="fab fa-github" />
        </SocialLink>
        <SocialLink href="https://twitter.com/MeekVeins" target="_blank">
          <span className="fab fa-twitter" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/kevin-mees-a643b779" target="_blank">
          <span className="fab fa-linkedin" />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/meekveins" target="_blank">
          <span className="fab fa-instagram" />
        </SocialLink>
      </SocialLinks>
      <div>&copy; 2020 Kevin Mees</div>
    </Container>
  )
}

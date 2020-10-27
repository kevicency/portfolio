import styled from '@emotion/styled'
import { modularScale } from 'polished'
import React from 'react'
import { neonLink2, neonTextShadow } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const Title = styled.a`
  font-family: Cabin;
  font-size: ${modularScale(1.5)};
  margin-bottom: 0.5em;
  color: ${colors.teal};

  ${neonLink2(colors.teal)};

  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: ${modularScale(2)};
    white-space: nowrap;
  }

  .fab,
  .fas {
    margin-right: 0.33em;
  }
`
const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 -0.25em;
`
const Tag = styled.span`
  font-size: ${modularScale(1.25)}em;

  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: ${modularScale(1.5)};
  }

  font-family: 'Cabin';
  color: ${colors.azure};
  /* color: ${colors.white};
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6; */
  margin: 0 0.33em;
  text-transform: uppercase;
  /* ${neonTextShadow(colors.magenta)}; */
`
const Description = styled.p`
  flex: 1;
  text-align: justify;
  flex-basis: 100%;
  margin-top: 1em;
`
const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints.md}px) {
    ${Tags} {
      justify-content: flex-end;
    }

    ${Description} {
      margin-top: 0;
    }
  }
`
interface ProjectProps {
  className?: string
  title: string
  tags: string[]
  link: { url: string; title: string; icon?: string }
}

export const Project: React.FC<ProjectProps> = ({ title, tags, link, className, children }) => (
  <Container className={className}>
    <Title href={link.url} target="_blank">
      {link.icon && <span className={`${link.icon === 'github' ? 'fab' : 'fas'} fa-${link.icon}`} />}
      {title}
    </Title>
    <Tags>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
    <Description>{children}</Description>
  </Container>
)

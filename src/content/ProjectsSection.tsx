import styled from '@emotion/styled'
import { modularScale } from 'polished'
import React from 'react'
import { Project } from '../components/Project'
import { fontFamily } from '../styles/mixins'
import { colors, widths } from '../styles/variables'

const Container = styled.div`
  min-height: 100vh;
  background: ${colors.bg};
  background: linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgAlt} 100%);
`

const Content = styled.div`
  max-width: ${widths.xl}px;
  margin: 0 auto;
  padding: 6em 2em;
`

const Title = styled.h2`
  color: ${colors.magenta};
  font-size: ${modularScale(6)};
  ${fontFamily('roadRage')};
  text-align: center;

  margin-bottom: ${modularScale(0.66)};
`

const ProjectList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
`
const ProjectItem = styled(Project)`
  flex: 1 0 33%;
  padding: 0 ${modularScale(1)};
  margin-bottom: ${modularScale(3)};
`

export const ProjectsSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Projects</Title>
        <ProjectList>
          <ProjectItem
            title="office-ui-formik-react"
            tags={['library', 'react', 'formik', 'office-ui-fabric', 'typescript']}
            link={{
              url: 'https://github.com/kmees/formik-office-ui-fabric-react',
              title: 'View on Github',
              icon: 'github'
            }}
          >
            office-ui-formik-react is a small wrapper library for the{' '}
            <a href="https://github.com/OfficeDev/office-ui-fabric-react">office-ui-fabric-react</a> component library
            that makes all the input components work seamlessly with{' '}
            <a href="https://github.com/jaredpalmer/formik">Formik</a>s &lt;Field /&gt; component.
          </ProjectItem>
          <ProjectItem
            title="storybook-addon-application-insights"
            tags={['plugin', 'storybook', 'application-insights']}
            link={{
              url: 'https://github.com/kmees/storybook-addon-application-insights',
              title: 'View on Github',
              icon: 'github'
            }}
          >
            A tiny <a href="https://storybook.js.org">Storybook</a> plugin that tracks story views in Azure Application.
            Insights.
          </ProjectItem>
          <ProjectItem
            title="karma-sinon-chai"
            tags={['plugin', 'karma', 'sinon', 'chai', 'tdd']}
            link={{
              url: 'https://github.com/kmees/karma-sinon-chai',
              title: 'View on Github',
              icon: 'github'
            }}
          >
            karma-sinon-chai is one of my oldest open-source projects and it's a simple karma plugin that configured
            karma with mocha, sinon and chai which I used in various internal projects for TDD.
          </ProjectItem>
          <ProjectItem
            title="MSBuild.NodeTools"
            tags={['plugin', 'visual-studio', 'msbuild', 'nodejs', 'dx']}
            link={{
              url: 'https://github.com/kmees/MSBuild.NodeTools',
              title: 'View on Github',
              icon: 'github'
            }}
          >
            In the dark times of Visual Studio 2013 and Angular 1 there was no support to run node/grunt/gulp scripts as
            a part of your build pipeline for .NET MVC applications. So I wrote a MSBuild plugin that added that
            functionality way before Visual Studio 2015 added support for it in a later Service Pack.
          </ProjectItem>
          <ProjectItem
            title="Redux and Mobx samples for SPFx"
            tags={['samples', 'spfx', 'mobx', 'redux']}
            link={{
              url: 'https://github.com/SharePoint/sp-dev-fx-webparts',
              title: 'View on Github',
              icon: 'github'
            }}
          >
            Shortly after SPFx was released in its preview state, I contributed examples on how to use Redux (
            <a href="https://github.com/SharePoint/sp-dev-fx-webparts/commit/5f773745990cd6c7e3d5bd3266325726e88197e9#diff-94c53b9990069cb18b8d391647e29b44">
              Commit
            </a>
            ) and Mobx (
            <a href="https://github.com/SharePoint/sp-dev-fx-webparts/commit/c909db5b4deeac1be6caf19d85988ba3f904f421#diff-0adcb184b2c11019ba3e39c507f55d58">
              Commit
            </a>
            ) in SPFx webparts written with React.
          </ProjectItem>
          <ProjectItem
            title="DCSS Leaderboards"
            tags={['website', 'pwa', 'react', 'graphql', 'azure-functions', 'mongodb']}
            link={{
              url: 'https://dcssleaderboards.z6.web.core.windows.net',
              title: 'View website',
              icon: 'external-link-alt'
            }}
          >
            DCSS Leaderboards is a small side project which I used to try out new technologies like PWA and graphql. The
            website aggregates game scores for the roguelike game 'Dungeon Crawl - Stone Soup (DCSS)' via an IRC bot and
            aggregates them into various leaderboards and categories. The static website is hosted on Azure Storage, the
            API is running as an Azure Function and the data is stored in an Azure Cosmos DB with a MongoDB interface.
          </ProjectItem>
        </ProjectList>
      </Content>
    </Container>
  )
}

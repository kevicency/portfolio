/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { neonBox } from '../styles/animations'
import { neonBoxShadow } from '../styles/mixins'
import { breakpoints, colors } from '../styles/variables'

const StyledTimeline = styled(VerticalTimeline)`
  .vertical-timeline-element-content {
    box-shadow: none !important;
    border-radius: 1em;
    background: ${colors.bgAlt};
  }

  .vertical-timeline-element-title {
    color: ${colors.azure};
  }

  @media screen and (min-width: ${breakpoints.lg}em) {
    .vertical-timeline-element-date {
      color: ${colors.white};
      opacity: 0.9;
    }
  }

  &::before {
    top:-10px;
    /* ${neonBoxShadow(colors.azure, 0.25)}; */
    /* animation: ${neonBox(colors.azure, 0.25)} 5s ease-in-out infinite alternate !important; */
    background: linear-gradient(180deg, transparent 0%, ${colors.azure} 3%, ${colors.azure} 97%, transparent 100%);
  }
`
const StyledTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-icon {
    background: ${colors.bgAlt} !important;
    color: ${props => props.iconStyle!.background as any}!important;
    ${props => neonBoxShadow(props.iconStyle!.background as any, 0.5)};
    /* animation: ${props =>
      neonBox(props.iconStyle!.background as any, 0.25)} 5s ease-in-out infinite alternate !important; */
  }
  .vertical-timeline-element-content {
    border-bottom: 3px solid ${props => props.iconStyle!.background};
  }

  .vertical-timeline-element-date {
    color: ${colors.white};
  }

  &:nth-child(even) .vertical-timeline-element-content {
    border-left: 3px solid ${props => props.iconStyle!.background};
  }
  &:nth-child(even) .vertical-timeline-element-content-arrow {
    border-right: 12px solid ${props => props.iconStyle!.background};
  }
  &:nth-child(odd) .vertical-timeline-element-content {
    border-right: 3px solid ${props => props.iconStyle!.background};
  }
  &:nth-child(odd) .vertical-timeline-element-content-arrow {
    border-right: 12px solid ${props => props.iconStyle!.background};
  }
`
const Title = styled.div`
  margin: 0;
  color: ${colors.teal}!important;
`
const Subtitle = styled.h4`
  margin: 0;
  color: ${colors.azure};
`
const Text = styled.p`
  color: ${colors.white}!important;
`

const Icon = styled.div`
  display: block;
  font-size: 23px;
  line-height: 24px;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
  text-align: center;
`
const NeonBox = styled.div<{ color?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  border-radius: 1em;
  background: white;
  ${props => neonBoxShadow(props.color || colors.azure, 0.25)};
  /* animation: ${props => neonBox(props.color || colors.azure, 0.25)} 60s ease-in-out infinite alternate; */
`

const Entry: React.FC<Pick<VerticalTimelineElementProps, 'className' | 'date'> & {
  title?: string
  subtitle?: string
  type: 'education' | 'work' | 'speaker' | 'start'
}> = ({ className, title, subtitle, type, children, ...props }) => {
  const color = {
    start: colors.teal,
    education: colors.yellow,
    work: colors.orange,
    speaker: colors.magenta
  }[type]

  const iconName = {
    education: 'university',
    work: 'briefcase',
    speaker: 'microphone',
    start: 'star'
  }[type]

  return (
    <StyledTimelineElement
      {...props}
      iconStyle={{
        background: color,
        color: '#fff'
      }}
      icon={
        <Icon>
          <span className={`fas fa-${iconName}`} />
        </Icon>
      }
    >
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children && <Text>{children}</Text>}
    </StyledTimelineElement>
  )
}

export const ExperienceTimeline: React.FC = () => (
  <StyledTimeline animate={false}>
    <Entry type="work" date="Q2 2019 - Q1 2020" title="Senior Partner" subtitle="Hololux GmbH, Saarbrücken">
      Rebranding of Experts Inside GmbH (Germany) to Hololux GmbH
    </Entry>
    <Entry type="speaker" date="June 2019" title="Insider Dev Tour" subtitle="Berlin, GER">
      Mythbusting PWAs
    </Entry>
    <Entry type="work" date="2016 - Q1 2019" title="Senior Partner" subtitle="Experts Inside GmbH, Saarbrücken">
      Development team lead (technical) | Project Management | Consulting
    </Entry>
    <Entry type="speaker" date="Oct 2016" title="ReactJS Day" subtitle="Verona, ITA">
      CSS is dead, long live CSS (but in modules, please)!
    </Entry>
    <Entry type="speaker" date="Sept 2016" title="React Next 2017" subtitle="Tel Aviv, ISR">
      CSS is dead, long live CSS (but in modules, please)!
    </Entry>
    <Entry type="speaker" date="July 2014" title="ShareConf" subtitle="Düsseldorf, GER">
      AngularJS SPApps - More App in less code
    </Entry>
    <Entry type="work" date="Q4 2011 - 2016" title="Full-Stack Developer" subtitle="Experts Inside GmbH, Saarbrücken">
      Sharepoint 2013/2016/Online development, customization and consulting, LOB application development.
    </Entry>
    <Entry type="work" date="Q1 2011 - Q3 2011" title="Junior Developer" subtitle="Data One, Saarbrücken">
      SharePoint 2010/2013 and WPF/Silverlight development.
    </Entry>
    <Entry type="work" date="2010 - Q1 2011" title="Working Student" subtitle="Data One, Saarbrücken">
      SharePoint 2010/2013 and WPF/Silverlight development.
    </Entry>
    <Entry type="work" date="2008 - 2010" title="Working Student" subtitle="Abeba GmbH, St.Ingbert">
      Rewriting a legacy LOB application in .NET and migrating the company databse from Pervasive SQL to Microsoft SQL
      Server.
    </Entry>
    <Entry
      date="2006 - 2011"
      type="education"
      title="Computer Science"
      subtitle="Universität des Saarlandes, Saarbrücken"
    />
    <Entry date="2005" type="work" title="Work & Travel" subtitle="Australia">
      Five months work &amp; travel in Australia, mostly staying in Brisbane and Melbourne.
    </Entry>
    <Entry type="education" date="2005" title="Abitur (A level)" subtitle="English | Mathematics | Physics" />
  </StyledTimeline>
)

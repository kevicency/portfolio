/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { modularScale } from 'polished'
import React, { useEffect, useState } from 'react'
import { SectionLink, SectionLinks } from 'react-scroll-section'
import claimJob from '../content/assets/claim_job.svg'
import claimName from '../content/assets/claim_name.svg'
import logo from '../content/assets/logo.svg'
import logoShadow from '../content/assets/logo_shadow.svg'
import { ClientInfo, ScrollTransition, useClientInfo, useScrollTransition } from '../hooks'
import { fontFamily, neonLink } from '../styles/mixins'
import { breakpoints, colors, heights, widths } from '../styles/variables'
import { easeInOutQuad } from '../tween'
import { capitalize } from '../util'

const { bg } = colors
const padding = 8
const headerHeight = heights.header
const innerHeight = headerHeight - 2 * padding
const navPadding = [padding, 2 * padding]

const nameRatio = 273 / 920
const logoRatio = 533 / 600
const jobRatio = 205 / 360

const nameWidth = innerHeight / nameRatio
const logoWidth = innerHeight / logoRatio

type LogoProps = ScrollTransition & ClientInfo

export const LogoWithClaim: React.FC<LogoProps> = props => {
  // TODO: make this less hacky?!
  const [showIntroAnimation, setShowIntroAnimation] = useState(true)
  useEffect(() => {
    setTimeout(() => setShowIntroAnimation(false), 1000)
  }, [setShowIntroAnimation])

  const { t, scrollRestored, landscape, cw, ch } = props
  const widthRatio = landscape ? 0.5 : 0.8
  const top = landscape ? ch * 0.4 : ch * 0.5
  const aw = easeInOutQuad(t, cw * widthRatio, innerHeight, 1)
  const ah = aw * easeInOutQuad(t, 2 / 3, 1, 1)

  return (
    <div
      className={`${showIntroAnimation && scrollRestored && t === 0 ? 'animate__animated animate__bounceInDown' : ''}`}
      style={{
        /* border: 1px solid red; */
        position: 'absolute',
        top: `${easeInOutQuad(t, top, navPadding[0], 1)}px`,
        left: `${easeInOutQuad(t, (cw * (1 - widthRatio)) / 2, navPadding[1], 1)}px`,
        height: `${ah}px`,
        width: `${aw}px`
      }}
    >
      <Logo {...props} aw={aw} ah={ah}>
        <LogoShadow {...props} aw={aw} ah={ah} />
      </Logo>
      <ClaimName {...props} aw={aw} ah={ah} />
      <ClaimJob {...props} aw={aw} ah={ah} />
    </div>
  )
}
export interface AnchorProps {
  aw: number
  ah: number
}

export const Logo: React.FC<LogoProps & AnchorProps> = ({ t, aw, children }) => {
  const wRatio = 2 / 3
  const w = easeInOutQuad(t, aw * wRatio, logoWidth, 1)

  return (
    <div
      css={css`
      background: url('${logo}');
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      `}
      style={{
        top: `${easeInOutQuad(t, 6, 0, 1)}%`,
        left: `${easeInOutQuad(t, (aw * wRatio) / 4, 0, 1)}px`,
        height: `${w * logoRatio}px`,
        width: `${w}px`
      }}
    >
      {children}
    </div>
  )
}
export const LogoShadow: React.FC<LogoProps & AnchorProps> = ({ t, aw }) => {
  const wRatio = 1
  const w = easeInOutQuad(t, aw * wRatio, nameWidth, 1)

  return (
    <div
      css={css`
        background: url('${logoShadow}');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top center;
        position: absolute;
        bottom: -25%;
        left: 0;
        width: 100%;
        height: 30%;
        /* bottom: ${easeInOutQuad(t, -25, 0, 1)}%;
        left: ${easeInOutQuad(t, 0, logoWidth * 0.75, 1)}px;
        height: ${w * nameRatio}px;
        width: ${w}px; */
      `}
      style={{
        opacity: `${t >= 0.8 ? Math.max(0, (0.9 - t) * 10) : 1}`
      }}
    />
  )
}
export const ClaimName: React.FC<LogoProps & AnchorProps> = ({ t, aw }) => {
  const wRatio = 1
  const w = easeInOutQuad(t, aw * wRatio, nameWidth, 1)

  return (
    <h1
      css={css`
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        /* justify-content: center;
        align-items: center; */
        /* background: ${t !== 1 ? `url('${claimName}')` : 'transparent'}; */
        background: url('${claimName}');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
      `}
      style={{
        top: `${easeInOutQuad(t, 15, 0, 1)}%`,
        left: `${easeInOutQuad(t, 0, logoWidth * 0.9, 1)}px`,
        height: `${w * nameRatio}px`,
        width: `${w}px`
      }}
    >
      <SectionLink section="home">
        {({ onClick }: any) => (
          <a
            onClick={onClick}
            css={css`
              flex: 1;
              text-indent: -9999px;
              cursor: ${t !== 1 ? 'initial' : 'pointer'};
            `}
          >
            Kevin Mees
          </a>
        )}
      </SectionLink>
    </h1>
  )
}
export const ClaimJob: React.FC<LogoProps & AnchorProps> = ({ t, aw }) => {
  const wRatio = 0.4
  const w = easeInOutQuad(t, aw * wRatio, nameWidth, 1)

  return (
    <div
      css={css`
        background: url('${claimJob}');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        `}
      style={{
        top: `${easeInOutQuad(t, 44, 0, 1)}%`,
        left: `${easeInOutQuad(t, 0.5 + ((1 - wRatio) * 100) / 2, 500, 1)}%`,
        height: `${w * jobRatio}px`,
        width: `${w}px`,
        opacity: `${t <= 0.5 ? 1 - t * 2 : 0}`
      }}
    />
  )
}

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 2em 0;
  list-style: none;

  & > li {
    /* flex: 2; */
    margin: 0;
  }
`
export const NavLink = styled.a<{ selected: boolean }>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  ${fontFamily('streamster')};
  font-size: ${modularScale(1.5)};
  padding: ${navPadding[0]}px ${navPadding[1]}px;

  ${neonLink(colors.teal, 0.5, 0)};
  ${props => (props.selected ? `color: ${colors.white};` : '')};

  &:hover {
    text-decoration: none;
  }
`

const Toggle = styled.button`
  display: inline-block;
  background: transparent;
  border: 0;
  font-size: ${modularScale(3)};
  padding: 4px 8px;
  margin-right: 4px;
  color: ${colors.teal};
`
const Dismiss = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
`

const SidebarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  background: ${colors.bg};
  transform: translateX(${props => (props.open ? 0 : 100)}%);
  transition: transform 0.5s ease;

  z-index: 1000;
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  height: 100%;
  right: 0%;
  margin-right: 8px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: ${breakpoints.md}px) {
    ${Toggle} {
      display: none;
    }
    ${Dismiss} {
      display: none;
    }

    ${SidebarContainer} {
      background: transparent;
      position: relative;
      width: auto;
      height: auto;
      transform: translateX(0%) !important;
      margin-right: 48px;
    }

    ${NavLinks} {
      flex-direction: row;
      padding: 0;
    }
  }
`

export const Sitenav: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = React.useCallback(() => setSidebarOpen(true), [setSidebarOpen])
  const closeSidebar = React.useCallback(() => setSidebarOpen(false), [setSidebarOpen])

  return (
    <Nav>
      <Toggle onClick={openSidebar}>
        <span className="fas fa-bars" />
      </Toggle>
      {sidebarOpen && <Dismiss onClick={closeSidebar} />}

      <SidebarContainer open={sidebarOpen}>
        <NavLinks>
          <SectionLinks>
            {({ allLinks }: any) =>
              Object.entries(allLinks)
                .filter(([key]: any) => key !== 'home')
                .map(([key, value]: any[]) => (
                  <li key={key}>
                    <NavLink
                      onClick={() => {
                        setTimeout(value.onClick(), 250)

                        closeSidebar()
                      }}
                      selected={value.isSelected}
                    >
                      {capitalize(key)}
                    </NavLink>
                  </li>
                ))
            }
          </SectionLinks>
        </NavLinks>
      </SidebarContainer>
    </Nav>
  )
}

export const NavContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  height: ${headerHeight}px;
`

export const Header: React.FC = () => {
  const clientInfo = useClientInfo(widths.xl)
  const logoProps = useScrollTransition(0.01, 0.55)

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        height: ${headerHeight}px;
        width: 100%;
        z-index: 999;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          height: ${headerHeight}px;
          width: 100%;
          background: ${bg};
          opacity: ${easeInOutQuad(logoProps.t, 0, 1, 1)};
        `}
      />
      <NavContainer>
        <LogoWithClaim {...logoProps} {...clientInfo} />
        <Sitenav />
      </NavContainer>
    </div>
  )
}

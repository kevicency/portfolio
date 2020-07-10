/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { modularScale } from 'polished'
import React from 'react'
import { SectionLink, SectionLinks } from 'react-scroll-section'
import claimJob from '../content/assets/claim_job.svg'
import claimName from '../content/assets/claim_name.svg'
import logo from '../content/assets/logo.svg'
import logoShadow from '../content/assets/logo_shadow.svg'
import { TransitionProps, useHeaderTransition } from '../hooks'
import { neonLink } from '../styles/mixins'
import { colors, heights, widths } from '../styles/variables'
import { easeInOutQuad } from '../tween'
import { capitalize } from '../util'

const { bg } = colors
const padding = 8
const height = heights.header
const innerHeight = height - 2 * padding
const navPadding = [padding, 2 * padding]

const nameRatio = 273 / 920
const logoRatio = 533 / 600
const jobRatio = 205 / 360

const nameWidth = innerHeight / nameRatio
const logoWidth = innerHeight / logoRatio

export const LogoWithClaim: React.FC<TransitionProps> = props => {
  const { t, cw, ch } = props
  const cwRatio = 0.5
  const aw = easeInOutQuad(t, cw * cwRatio, innerHeight, 1)
  const ah = aw * easeInOutQuad(t, 2 / 3, 1, 1)

  return (
    <div
      css={css`
        /* border: 1px solid red; */
        position: absolute;
        top: ${easeInOutQuad(t, ch * 0.4, navPadding[0], 1)}px;
        left: ${easeInOutQuad(t, (cw * (1 - cwRatio)) / 2, navPadding[1], 1)}px;
        height: ${ah}px;
        width: ${aw}px;
      `}
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

export const Logo: React.FC<TransitionProps & AnchorProps> = ({ t, aw, children }) => {
  const wRatio = 2 / 3
  const w = easeInOutQuad(t, aw * wRatio, logoWidth, 1)

  return (
    <div
      css={css`
      background: url('${logo}');
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: ${easeInOutQuad(t, 6, 0, 1)}%;
      left: ${easeInOutQuad(t, (aw * wRatio) / 4, 0, 1)}px;
      height: ${w * logoRatio}px;
      width: ${w}px;
    `}
    >
      {children}
    </div>
  )
}
export const LogoShadow: React.FC<TransitionProps & AnchorProps> = ({ t, cw, ch, aw, ah }) => {
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
        bottom: -90%;
        left: 0;
        width: 100%;
        height: 100%;
        /* bottom: ${easeInOutQuad(t, -25, 0, 1)}%;
        left: ${easeInOutQuad(t, 0, logoWidth * 0.75, 1)}px;
        height: ${w * nameRatio}px;
        width: ${w}px; */
        opacity: ${t >= 0.8 ? Math.max(0, (0.9 - t) * 10) : 1};
      `}
    />
  )
}
export const ClaimName: React.FC<TransitionProps & AnchorProps> = ({ t, aw }) => {
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
        top: ${easeInOutQuad(t, 15, 0, 1)}%;
        left: ${easeInOutQuad(t, 0, logoWidth * 0.9, 1)}px;
        height: ${w * nameRatio}px;
        width: ${w}px;
      `}
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
      {/* <h1
        css={css`
          font-family: 'Road Rage';
          font-size: 25px;
          margin: 0;
          display: ${t !== 1 ? 'none' : 'block'};

          ${neonLink(colors.magenta, 1.25)}
        `}
      >
        Kevin Mees
      </h1> */}
    </h1>
  )
}
export const ClaimJob: React.FC<TransitionProps & AnchorProps> = ({ t, aw }) => {
  const wRatio = 0.4
  const w = easeInOutQuad(t, aw * wRatio, nameWidth, 1)

  return (
    <div
      css={css`
        background: url('${claimJob}');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: ${easeInOutQuad(t, 44, 0, 1)}%;
        left: ${easeInOutQuad(t, 0.5 + ((1 - wRatio) * 100) / 2, 500, 1)}%;
        height: ${w * jobRatio}px;
        width: ${w}px;
        opacity: ${t <= 0.5 ? 1 - t * 2 : 0};
      `}
    />
  )
}

export const NavLink = styled.a<{ selected: boolean }>`
  position: relative;
  text-decoration: none;
  font-family: Streamster;
  font-size: ${modularScale(1.5)};
  padding: 0 ${navPadding[1]}px;

  ${neonLink(colors.teal, 0.5, 0)};
  ${props => (props.selected ? `color: ${colors.white};` : '')};

  &:hover {
    text-decoration: none;
  }
`

export interface SidebarProps {
  navigateDelay?: number
  onNavigate?: (sectionId: string) => void
}

export const Sitenav: React.FC<SidebarProps> = props => {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        height: 100%;
        right: 0%;
        margin-right: 8px;

        display: flex;
        justify-content: flex-end;
        align-items: center;
      `}
    >
      <ul
        css={css`
          display: flex;
          margin: 0;
          padding: 8px 0;
          list-style: none;

          & > li {
            margin: 0;
          }
        `}
      >
        <SectionLinks>
          {({ allLinks }: any) =>
            Object.entries(allLinks)
              .filter(([key]: any) => key !== 'home')
              .map(([key, value]: any[]) => (
                <li key={key}>
                  <NavLink
                    onClick={() => {
                      setTimeout(value.onClick(), props.navigateDelay || 0)

                      if (props.onNavigate) {
                        props.onNavigate(key)
                      }
                    }}
                    selected={value.isSelected}
                  >
                    {capitalize(key)}
                  </NavLink>
                </li>
              ))
          }
        </SectionLinks>
      </ul>
    </nav>
  )
}

export const NavContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  height: ${height}px;
`

export const Header: React.FC = () => {
  const transition = useHeaderTransition(0.01, 0.55, widths.xl)

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        height: ${height}px;
        width: 100%;
        z-index: 999;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          height: ${height}px;
          width: 100%;
          background: ${bg};
          opacity: ${easeInOutQuad(transition.t, 0, 1, 1)};
        `}
      />
      <NavContainer>
        <LogoWithClaim {...transition} cw={Math.min(1280, transition.cw)} />
        <Sitenav />
      </NavContainer>
    </div>
  )
}

/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import claimJob from '../content/assets/claim_job.svg'
import claimName from '../content/assets/claim_name.svg'
import logo from '../content/assets/logo.svg'
import logoShadow from '../content/assets/logo_shadow.svg'
import { TransitionProps, useHeaderTransition } from '../hooks'
import { colors, heights } from '../styles/variables'
import { easeInOutQuad } from '../tween'

const { bg } = colors
const padding = 8
const height = heights.header
const innerHeight = height - 2 * padding

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
        top: ${easeInOutQuad(t, ch * 0.33, padding, 1)}px;
        left: ${easeInOutQuad(t, (cw * (1 - cwRatio)) / 2, cw * 0.25, 1)}px;
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
export const ClaimName: React.FC<TransitionProps & AnchorProps> = ({ t, cw, ch, aw, ah }) => {
  const wRatio = 1
  const w = easeInOutQuad(t, aw * wRatio, nameWidth, 1)

  return (
    <div
      css={css`
        background: url('${claimName}');
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: ${easeInOutQuad(t, 15, 0, 1)}%;
        left: ${easeInOutQuad(t, 0, logoWidth * 0.75, 1)}px;
        height: ${w * nameRatio}px;
        width: ${w}px;
      `}
    />
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
        top: ${easeInOutQuad(t, 44, 200, 1)}%;
        left: ${easeInOutQuad(t, 0.5 + ((1 - wRatio) * 100) / 2, 200, 1)}%;
        height: ${w * jobRatio}px;
        width: ${w}px;
        opacity: ${t <= 0.33 ? 1 - t * 3 : 0};
      `}
    />
  )
}

export const Header: React.FC = () => {
  const transition = useHeaderTransition(0.01, 0.4)

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
      <LogoWithClaim {...transition} />
    </div>
  )
}

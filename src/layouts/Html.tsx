import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import * as React from 'react'
import { ScrollingProvider } from 'react-scroll-section'
import { Helmet } from '../components/Helmet'
import normalize from '../styles/normalize'
import { colors } from '../styles/variables'
import { isBrowser } from '../util'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  background: ${colors.bg};
`
export const Html: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={() => css(normalize)} />
      <Helmet />
      <Layout>{isBrowser() && <ScrollingProvider>{children}</ScrollingProvider>}</Layout>
    </>
  )
}

export default Html

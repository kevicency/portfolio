import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import ReactHelmet from 'react-helmet'

export const Helmet: React.FC = () => {
  const data = useStaticQuery(graphql`
    query IndexLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <ReactHelmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { name: 'application-name', content: 'Kevin Mees' },
        { name: 'msapplication-TileColor', content: '#051627' },
        { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }
      ]}
    >
      <script src="https://kit.fontawesome.com/296323bd6d.js" crossOrigin="anonymous" />
    </ReactHelmet>
  )
}

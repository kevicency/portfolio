export * from './Html'
// import { graphql, StaticQuery } from 'gatsby'
// import 'modern-normalize'
// import * as React from 'react'
// import Helmet from 'react-helmet'
// import LayoutMain from '../components/LayoutMain'
// import LayoutRoot from '../components/LayoutRoot'
// import '../styles/normalize'

// interface StaticQueryProps {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//       keywords: string
//     }
//   }
// }

// const IndexLayout: React.FC = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query IndexLayoutQuery {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//       }
//     `}
//     render={(data: StaticQueryProps) => (
//       <LayoutRoot>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: data.site.siteMetadata.description },
//             { name: 'keywords', content: data.site.siteMetadata.keywords }
//           ]}
//         />
//         <LayoutMain>{children}</LayoutMain>
//       </LayoutRoot>
//     )}
//   />
// )

// export default IndexLayout

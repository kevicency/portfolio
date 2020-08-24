module.exports = {
  siteMetadata: {
    title: 'Kevin Mees | Portfolio',
    description: "I'm Kevin Mees, a Full Stack Developer, Speaker and Open Source Contributor",
    keywords: '',
    siteUrl: 'https://kevinmees.com',
    author: {
      name: 'Kevin Mees',
      url: 'https://github.com/kmees',
      email: 'kev.mees@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Road Roage', 'Streamster'],
          urls: ['/webfonts.css']
        },
        google: {
          families: ['Cabin']
        }
      }
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //         options: {
    //           wrapperStyle: 'margin-bottom: 1rem'
    //         }
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-smartypants',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 1140,
    //           quality: 90,
    //           linkImagesToOriginal: false
    //         }
    //       }
    //     ]
    //   }
    // },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}

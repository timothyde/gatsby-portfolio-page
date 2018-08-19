module.exports = {
  siteMetadata: {
    title: 'timothy.de | Personal Webpage of Timothy Krechel',
    description:
      'This is the personal Webpage of Timothy Krechel, a startup affine tech enthusiast.',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/static/`,
      },
    },
  ],
}

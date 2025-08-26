module.exports = {
  siteMetadata: {
    title: `Lupus Maximus Security`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik`,
        ],
        display: 'swap'
      }
    }
  ]
};

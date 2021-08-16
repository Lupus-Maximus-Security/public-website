module.exports = {
  siteMetadata: {
    title: `Big Bad Wolf Security`,
  },
  pathPrefix: "/public-website",
  plugins: [
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

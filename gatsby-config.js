module.exports = {
  siteMetadata: {
    title: `Ankush Chaudhary | Portfolio`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/images/favicon.png',
      },
    },
  ],
};

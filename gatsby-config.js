const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        logoSrc: 'https://organicread.com/wp-content/uploads/2020/02/organic-read-retina-logo-for-wp.png'
    },
    plugins: [
        "gatsby-plugin-material-ui",
        "gatsby-plugin-typescript",
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ]
}
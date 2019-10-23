module.exports = {
  // pathPrefix: "/hunggwo-gatsby",
  siteMetadata: {
    title: `弘國廣告`,
    description: `台中弘國廣告公司 各式室內室外廣告製作 壓克力製品 活動展架 立體字 精美公佈欄 大圖輸出 廣告帆布 室內外精緻招牌 車體廣告 電腦割字`,
    author: `@weianwang`,
    siteUrl: `http://www.hunggwo.com.tw`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/best-price.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-75506898-6",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

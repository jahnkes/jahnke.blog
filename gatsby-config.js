const { formatPath } = require("./src/util/formatPath")

module.exports = {
  siteMetadata: {
    title: "Adam & Olivia Jahnke",
    description: "The blog of Adam & Olivia Jahnke.",
    siteUrl: "https://jahnke.blog",
    author: "Adam & Olivia Jahnke",
  },
  // mapping: {
  //   "MarkdownRemark.frontmatter.author": "AuthorsJson",
  // },
  plugins: [
    { resolve: "@rhysforyou/gatsby-plugin-react-helmet-async" },
    { resolve: "gatsby-plugin-styled-jsx" },
    { resolve: "gatsby-plugin-sitemap" },
    { resolve: "gatsby-transformer-json" },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/authors.json`,
        name: "authors",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "±",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "transparent",
              linkImagesToOriginal: true,
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    {
      resolve: "gatsby-plugin-feed-generator",
      options: {
        rss: true,
        json: true,
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            name: "feed",
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { layout: { eq: "post" } } },
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      html
                      id
                      fileAbsolutePath
                      frontmatter {
                        date
                        author { name }
                        updated
                        title
                      }
                    }
                  }
                }
              }
            `,
            normalize: ({
              query: {
                site,
                allMarkdownRemark: { edges },
              },
            }) => {
              return edges.map(
                ({
                  node: {
                    html,
                    id,
                    fileAbsolutePath,
                    frontmatter: { tags, author: { name }, link, title, date, updated },
                  },
                }) => {
                  return {
                    author: { name },
                    date,
                    date_modified: updated,
                    date_published: date,
                    external_url: link,
                    html,
                    id,
                    tags,
                    title,
                    url:
                      site.siteMetadata.siteUrl + formatPath(fileAbsolutePath),
                  }
                },
              )
            },
          },
        ],
      },
    },
    // {
    //   resolve: `@raae/gatsby-remark-oembed`,
    //   options: {
    //     providers: {
    //       include: ["Twitter", "Instagram"],
    //       settings: {
    //         // Ex. Show all Twitter embeds with the dark theme
    //         Twitter: { theme: "dark" },
    //         // Ex. Hide all Instagram comments by default
    //         Instagram: { hidecaption: true }
    //       }
    //     }
    //   }
    // },
  ],
}

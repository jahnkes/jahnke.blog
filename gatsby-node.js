const path = require("path")
const { format, parseISO } = require("date-fns")
const config = require("./gatsby-config.js")
const { formatPath } = require("./src/util/formatPath")
const PER_PAGE = 10

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      pages: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            fileAbsolutePath
            id
            frontmatter {
              author {
                id
                name
                gravatar
              }
              tags
              layout
              date
              title
            }
          }
        }
      }

      archive: allMarkdownRemark(
        filter: {
          frontmatter: { layout: { eq: "post" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fileAbsolutePath
            id
            frontmatter {
              author {
                id
                name
                gravatar
              }
              tags
              date
              title
            }
          }
        }
      }

      tags: allMarkdownRemark(
        filter: {
          frontmatter: { layout: { eq: "post" }, published: { ne: false } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }

      authors: allMarkdownRemark(
        filter: {
          frontmatter: { layout: { eq: "post" }, published: { ne: false } }
        }
      ) {
        group(field: frontmatter___author___id) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    // Generate paginated post list
    const numPages = Math.ceil(data.archive.edges.length / PER_PAGE)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? "/posts" : `/posts/${i + 1}`,
        component: path.resolve(`src/templates/posts.js`),
        context: {
          limit: PER_PAGE,
          skip: i * PER_PAGE,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Generage Archive Page
    const buckets = data.archive.edges.reduce((a, post) => {
      const year = format(parseISO(post.node.frontmatter.date), "yyyy")
      if (!a[year]) {
        a[year] = []
      }

      a[year].push(post)
      return a
    }, {})
    console.log(buckets)
    createPage({
      path: `/archive`,
      component: path.resolve(`src/templates/archive.js`),
      context: { buckets },
    })

    // Create an index page for each individual tag
    data.tags.group.forEach(({ fieldValue: tag }) => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve(`src/templates/tag.js`),
        context: { tag },
      })
    })
    createPage({
      path: `/tags`,
      component: path.resolve(`src/templates/tags.js`),
      context: { tags: data.tags.group },
    })

    // Create an index page for each individual author
    data.authors.group.forEach(({ fieldValue: author }) => {
      createPage({
        path: `/authors/${author}`,
        component: path.resolve(`src/templates/author.js`),
        context: { author },
      })
    })
    createPage({
      path: `/authors`,
      component: path.resolve(`src/templates/authors.js`),
      context: { authors: data.authors.group },
    })

    // Generate all detail pages
    data.pages.edges.forEach(
      ({
        node: {
          fileAbsolutePath,
          id,
          frontmatter: { layout },
        },
      }) => {
        createPage({
          path: formatPath(fileAbsolutePath),
          component: path.resolve(
            `src/templates/${String(layout || "page")}.js`,
          ),
          context: { id }, // additional data can be passed via context
        })
      },
    )
  })
}

// https://www.gatsbyjs.org/docs/schema-customization/#nested-types
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      link: String
      tags: [String]
      updated: String
      published: Boolean
      author: AuthorsJson @link
    }
    type AuthorsJson implements Node {
      posts: [MarkdownRemark] @link(by: "frontmatter.author.id", from: "id")
    }
  `
  createTypes(typeDefs)
}

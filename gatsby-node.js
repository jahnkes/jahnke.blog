require("@babel/polyfill");
const path = require("path");
const { formatPath } = require("./src/util/formatPath");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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
              author
              tags
              layout
              date
              title
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    // Generate tag/authors index page
    const meta = data.pages.edges
      // Loop through all the posts and gather unique tags/authors
      .reduce(
        (
          a,
          {
            node: {
              frontmatter: { author, tags }
            }
          }
        ) => {
          if (tags) {
            for (const tag of tags) {
              a.tags[tag] = (a.tags[tag] || 0) + 1;
            }
          }
          if (author) {
            a.authors[author] = (a.authors[author] || 0) + 1;
          }
          return a;
        },
        { tags: {}, authors: {} }
      );

    createPage({
      path: `/tags`,
      component: path.resolve(`src/templates/tags.js`),
      context: { tags: meta.tags }
    });
    // Create an index page for each individual tag
    Object.keys(meta.tags).forEach(tag => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve(`src/templates/tag.js`),
        context: { tag }
      });
    });

    createPage({
      path: `/authors`,
      component: path.resolve(`src/templates/authors.js`),
      context: { authors: meta.authors }
    });
    // Create an index page for each individual author
    Object.keys(meta.authors).forEach(author => {
      createPage({
        path: `/authors/${author}`,
        component: path.resolve(`src/templates/author.js`),
        context: { author }
      });
    });

    let count = 0;
    // Generate all pages
    data.pages.edges.forEach(
      ({
        node: {
          fileAbsolutePath,
          id,
          frontmatter: { layout }
        }
      }) => {
        createPage({
          path: formatPath(fileAbsolutePath),
          component: path.resolve(
            `src/templates/${String(layout || "page")}.js`
          ),
          context: { id } // additional data can be passed via context
        });
      }
    );
  });
};

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
    }
  `;
  createTypes(typeDefs);
};

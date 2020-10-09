import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import PostList from "../components/PostList"
import Layout from "../components/layout"

const AuthorTemplate = ({ data, pageContext: { author } }) => {
  const { edges: posts = [] } = (data && data.allMarkdownRemark) || {}
  return (
    <Layout>
      <SEO title={`Posts by ${author}`} />
      <section>
        <h1>Posts by {author}</h1>
        <PostList posts={posts} />
      </section>
    </Layout>
  )
}

export const authorPageQuery = graphql`
  query AuthorPage($author: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { layout: { eq: "post" }, author: { id: { eq: $author } } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fileAbsolutePath
          excerpt(format: HTML, pruneLength: 400)
          id
          timeToRead
          frontmatter {
            date
            author {
              id
              name
              gravatar
            }
            tags
            title
          }
        }
      }
    }
  }
`

export default AuthorTemplate

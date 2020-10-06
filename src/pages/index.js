import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import PostList from "../components/PostList"
import Layout from "../components/layout"

const Index = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <Layout>
      <SEO />
      <PostList posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          excerpt(format: HTML, pruneLength: 400)
          frontmatter {
            date
            author {
              name
              gravatar
              id
            }
            tags
            title
          }
        }
      }
    }
  }
`

export default Index

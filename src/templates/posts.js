import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import PostList from "../components/PostList"
import Layout from "../components/layout"

const PostsTemplate = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <Layout>
      <section className="section">
        <SEO />
        <PostList posts={posts} />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
              id
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

export default PostsTemplate

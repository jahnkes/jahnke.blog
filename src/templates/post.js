import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Post from "../components/Post"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={`${(post.timeToRead, post.frontmatter.title)}`} />
      <Post post={post} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date
        link
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
`

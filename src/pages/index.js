import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet-async"
import PostList from "../components/PostList"
import Layout from "../components/layout"

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
          })
        }
      })
    }
  }

  render() {
    const { data } = this.props
    const { edges: posts = [] } = (data && data.allMarkdownRemark) || {}

    return (
      <Layout>
        <section className="section">
          <Helmet>
            <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          </Helmet>
          <h2>Recent Posts ({posts.length}):</h2>
          <PostList posts={posts} />
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { layout: { eq: "post" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            date
            tags
            title
          }
        }
      }
    }
  }
`

import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/SEO"
import Link from "gatsby-link"
import Layout from "../components/layout"

const Tags = ({
  data: {
    allMarkdownRemark: { group: tags },
  },
}) => {
  return (
    <Layout>
      <SEO title="All Tags" />
      <section>
        <h1>Tags</h1>
        <ul>
          {tags.map(({ fieldValue: tag, totalCount }) => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>
                {tag} ({totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "post" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Tags

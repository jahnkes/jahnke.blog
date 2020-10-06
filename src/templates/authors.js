import React from "react"
import SEO from "../components/SEO"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const AuthorsTemplate = ({
  data: {
    allAuthorsJson: { edges: authors },
  },
}) => {
  return (
    <Layout>
      <SEO title="Posts by Author" />
      <section>
        <h1>Posts by Author</h1>
        <ul>
          {authors.map(({ node: author }) => (
            <li key={author.id}>
              <Link to={`/authors/${author.id}`}>
                {author.name} ({author.posts.length})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const authorsQuery = graphql`
  query AuthorsQuery {
    allAuthorsJson {
      edges {
        node {
          id
          name
          gravatar
          posts {
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`

export default AuthorsTemplate

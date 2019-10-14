import React from "react"
import { Helmet } from "react-helmet-async"
import Link from "gatsby-link"
import Layout from "../components/layout"

export default ({ pageContext: { tags } }) => {
  return (
    <Layout>
      <section>
        <Helmet title={`All Tags | Adam Jahnke`} />
        <h1>Tags</h1>
        <ul>
          {Object.entries(tags).map(([tag, count]) => (
            <li key={tag}><Link to={`/tags/${tag}`}>{tag} ({count})</Link></li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

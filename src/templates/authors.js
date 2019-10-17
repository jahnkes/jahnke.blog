import React from "react";
import SEO from "../components/SEO";
import Link from "gatsby-link";
import Layout from "../components/layout";

export default ({ pageContext: { authors } }) => {
  return (
    <Layout>
      <SEO title="Posts by Author" />
      <section>
        <h1>Posts by Author</h1>
        <ul>
          {authors.map(({ fieldValue: author, totalCount }) => (
            <li key={author}>
              <Link to={`/authors/${author}`}>
                {author} ({totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

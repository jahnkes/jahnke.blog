import React from "react";
import { Helmet } from "react-helmet-async";
import Link from "gatsby-link";
import Layout from "../components/layout";

export default ({ pageContext: { authors } }) => {
  return (
    <Layout>
      <section>
        <Helmet title={`Authors | Adam Jahnke`} />
        <h1>Authors</h1>
        <ul>
          {Object.entries(authors).map(([author, count]) => (
            <li key={author}>
              <Link to={`/authors/${author}`}>
                {author} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

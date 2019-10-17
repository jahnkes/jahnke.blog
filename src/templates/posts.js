import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import PostList from "../components/PostList";
import Layout from "../components/layout";

export default ({
  data: {
    allMarkdownRemark: { edges: posts }
  }
}) => {
  return (
    <Layout>
      <section className="section">
        <Helmet>
          <script
            async
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          />
        </Helmet>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

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
            author
            tags
            title
          }
        }
      }
    }
  }
`;

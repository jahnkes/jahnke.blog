import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout";
import Link from "gatsby-link";
import Date from "../components/Date";
import Meta from "../components/Meta";
import Tags from "../components/Tags";
import { formatPath } from "../util/formatPath";

export default ({ pageContext: { buckets } }) => {
  return (
    <Layout>
      <SEO title="Post Archive" />
      <section>
        {Object.entries(buckets)
          .reverse()
          .map(([year, posts]) => (
            <React.Fragment key={year}>
              <h2>{year}</h2>
              <ul>
                {posts.map(
                  ({
                    node: {
                      fileAbsolutePath,
                      id,
                      frontmatter: { author, tags, date, title }
                    }
                  }) => (
                    <li key={id}>
                      <Link to={formatPath(fileAbsolutePath)}>{title}</Link>
                      <Meta>
                        Posted by {author} on <Date date={date} />{" "}
                        {!!tags.length && (
                          <>
                            under <Tags tags={tags} />
                          </>
                        )}
                      </Meta>
                    </li>
                  )
                )}
              </ul>
              <style jsx>{`
                h2 {
                  color: var(--primary);
                }
                li {
                margin-bottom: 0.5em;
                }
                // li {
                //   align-items: center;
                //   display: flex;
                // }
              `}</style>
            </React.Fragment>
          ))}
      </section>
    </Layout>
  );
};

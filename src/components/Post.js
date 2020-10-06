import React from "react"
import Link from "gatsby-link"
import Date from "./Date"
import Meta from "./Meta"
import Tags from "./Tags"
import { formatPath } from "../util/formatPath"

const Post = ({
  post: {
    excerpt,
    html,
    timeToRead,
    fileAbsolutePath,
    frontmatter: { updated, date, author, tags, link, title },
  },
}) => {
  return (
    <article>
      <h1>
        {fileAbsolutePath ? (
          <Link to={formatPath(fileAbsolutePath)}>{title}</Link>
        ) : (
          title
        )}
      </h1>
      <Meta>
        <img
          alt={author.name}
          src={`https://www.gravatar.com/avatar/${author.gravatar}?s=80`}
        />
        <div>
          Posted by <Link to={`/authors/${author.id}`}>{author.name}</Link> on{" "}
          <Date date={date} />{" "}
          {!!tags.length && (
            <>
              under <Tags tags={tags} />
            </>
          )}
          {timeToRead && (
            <>
              <br />
              {timeToRead} minute read
            </>
          )}
        </div>
      </Meta>
      <div dangerouslySetInnerHTML={{ __html: html || excerpt }} />
      {excerpt && (
        <small>
          <Link to={formatPath(fileAbsolutePath)}>Read full post &raquo;</Link>
        </small>
      )}
      <style jsx>{`
        h1 {
          border-bottom: 1px solid transparent;
          font-size: 1.2em;
          margin-bottom: 0.5em;
          margin-top: 0;
        }
      `}</style>
    </article>
  )
}

export default Post

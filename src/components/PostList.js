import React from "react"
import Post from "./Post"

const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(({ node: post }) => console.log(post) || (
      <li key={post.id}>
        <Post post={post} />
      </li>
    ))}
    <style jsx>{`
      ul {
        margin-top: 0;
        padding: 0;
      }
      li {
        margin-bottom: 4em;
      }
      li :global(a) {
        color: var(--primary);
      }
      li :global(a:hover) {
        color: var(--link);
      }
    `}</style>
  </ul>
)

export default PostList

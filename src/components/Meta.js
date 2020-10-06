import React from "react"

const Meta = ({ children }) => (
  <>
    <div className="post-meta">{children}</div>
    <style jsx>{`
      .post-meta {
        align-items: center;
        color: var(--tertiary);
        display: flex;
        font-size: 0.8em;
        width: 100%;
      }
      .post-meta :global(img) {
        border-radius: 50%;
        margin: 0 1em 0 0;
        width: 40px;
      }
    `}</style>
  </>
)

export default Meta

import React from "react"

export default ({ children }) => (
  <>
    <div className="post-meta">{children}</div>
    <style jsx>{`
      .post-meta {
        color: var(--tertiary);
        font-size: 0.8em;
      }
    `}</style>
  </>
)

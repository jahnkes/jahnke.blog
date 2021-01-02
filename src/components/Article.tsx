import React from "react"

export default function Article({ children }) {
  return (
    <>
      <article>{children}</article>
      <style jsx>{`
        article {
          margin-bottom: 4em;
        }
      `}</style>
    </>
  )
}

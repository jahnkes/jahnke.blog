import React from "react";

export default () => {
  return (
    <>
      <nav>
        <a
          href="/archive"
          title="View the Archive"
        >
          View the Archive
        </a>
      </nav>
      <style jsx>{`
        nav {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 2em auto;
        }

        nav a {
          border: none;
          color: var(--navlink);
          display: inline-block;
          margin: 0 0.5em;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
};

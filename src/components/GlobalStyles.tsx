import React from "react"

export function GlobalSyles() {
  return (
    <style jsx global>{`
      :root {
        --cyan: #32a198;
        --cyan2: #72cadc;
        --green: #86981c;
        --green2: #668426;
        --yellow: #b5881d;
        --yellow2: #e9a734;

        --primary: #333333;
        --secondary: #555555;
        --tertiary: #999999;

        --background: #ffffff;
        --foreground: var(--primary);

        --link: var(--cyan);
        --link-hover: var(--tertiary);

        --body: system-ui, "Helvetica Neue", Helvetica, sans-serif;
        --monospace: monospace;
        --heading: -apple-system-headline, var(--body);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --primary: #dddddd;
          --secondary: #bbbbbb;
          --tertiary: #999999;

          --background: #000000;
          --foreground: var(--primary);
        }
      }

      body {
        background-color: var(--background);
        color: var(--foreground);
        font-family: var(--body);
        line-height: 1.6;
        text-decoration-skip: ink;
      }

      ::selection {
        background-color: var(--yellow);
        color: var(--background);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--cyan);
        font-family: var(--heading);
        font-size: 100%;
        font-weight: 400;
        line-height: 1.3;
      }
      h1 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
      }
      h2 {
        font-size: 1.3em;
      }
      h3 {
        font-size: 1.1em;
      }
      h4 {
        text-transform: uppercase;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ol,
      p,
      ul,
      .highlight {
        margin-bottom: 20px;
      }

      a {
        border-bottom: 1px dotted currentColor;
        color: var(--link);
        text-decoration: none;
      }

      a:hover {
        color: var(--primary);
        border-bottom: 1px solid currentColor;
      }

      img {
        box-shadow: unset !important;
        max-width: 100%;
      }

      hr {
        color: var(--tertiary);
        border: none;
        border-bottom: 0.1em solid currentColor;
        margin: 2em;
        position: relative;
      }
      hr::after {
        background-color: var(--background);
        content: "＋";
        font-size: 1em;
        left: 50%;
        padding: 0 1em;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      blockquote {
        border-left: 0.2em solid var(--yellow2);
        color: var(--secondary);
        font-size: 1em;
        font-weight: 300;
        line-height: 150%;
        margin: 0;
        padding-left: 1em;
      }

      big {
        font-size: 1.3em;
      }

      small {
        font-size: 0.8em;
      }

      strong {
        font-weight: 700;
      }

      em {
        font-style: italic;
      }

      ul,
      ol {
        margin-left: 1em;
        padding-left: 1em;
      }

      ul {
        list-style-type: disc;
      }

      ol {
        list-style-type: decimal;
      }

      li > p {
        margin: 0;
      }

      dl {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 1em;
      }

      dl > * {
        width: 50%;
      }

      table {
        margin-bottom: 1.5em;
        width: 100%;
      }

      th {
        text-align: left;
      }

      sup,
      sub {
        line-height: 0;
      }

      // code,
      // pre {
      //   font-family: var(--monospace);
      // }

      // pre code {
      //   background: var(--base3);
      //   border-radius: 2px;
      //   box-sizing: border-box;
      //   display: block;
      //   overflow: scroll;
      //   padding: 0.25em 0.75em;
      //   width: 100%;
      // }

      header {
        margin-bottom: 1em;
      }

      header h1 {
        margin-bottom: 0em;
      }

      /* This is for gatsby-remark-autolink-headers */
      .anchor {
        border: none;
        text-decoration: none;
      }
      .anchor:hover {
        border: none;
        text-decoration: none;
      }
      .anchor svg path {
        fill: var(--primary);
      }

      /**
       * Prism things:
       */
      .gatsby-highlight-code-line {
        background-color: #feb;
        display: block;
        margin-right: -1em;
        margin-left: -1em;
        padding-right: 1em;
        padding-left: 0.75em;
        border-left: 0.25em solid #f99;
      }

      /**
       * Add back the container background-color, border-radius, padding, margin
       * and overflow that we removed from <pre>.
       */
      .gatsby-highlight {
        background-color: #fdf6e3;
        border-radius: 0.3em;
        margin: 0.5em 0;
        padding: 1em;
        overflow: auto;
      }

      /**
       * Remove the default PrismJS theme background-color, border-radius, margin,
       * padding and overflow.
       * 1. Make the element just wide enough to fit its content.
       * 2. Always fill the visible space in .gatsby-highlight.
       */
      .gatsby-highlight pre[class*="language-"] {
        background-color: transparent;
        margin: 0;
        padding: 0;
        overflow: initial;
        float: left; /* 1 */
        min-width: 100%; /* 2 */
      }

      :not(pre) > code[class*="language-"] {
        white-space: normal;
      }
      code[class*="language-"],
      pre[class*="language-"] {
        font-family: var(--body);
      }
    `}</style>
  )
}

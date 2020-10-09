import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet-async"
import "prismjs/themes/prism-solarizedlight.css"

const TemplateWrapper: React.FC = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
      <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
      <link
        rel="webmention"
        href="https://webmention.io/jahnke.blog/webmention"
      />
      <link rel="pingback" href="https://webmention.io/jahnke.blog/xmlrpc" />
    </Helmet>
    <Header />
    <div id="content">{children}</div>
    <Footer />
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

      #content {
        margin: 1.5rem auto;
        max-width: 40rem;
        width: 90%;
      }

      ::selection {
        background-color: var(--yellow);
        color: var(--background);
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

      ol,
      ul {
        list-style-type: none;
      }

      ul li > p {
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

      article {
        margin-bottom: 4em;
      }

      article img {
        box-shadow: unset !important;
        max-width: 100%;
      }

      article ul,
      article ol {
        margin-left: 1em;
        padding-left: 1em;
      }

      article ul {
        list-style-type: disc;
      }

      article ol {
        list-style-type: decimal;
      }

      article li > p,
      article li > ul {
        margin-bottom: 0;
        margin-top: 0;
      }

      article table {
        margin-bottom: 1.5em;
      }

      header {
        margin-bottom: 1em;
      }

      header h1 {
        margin-bottom: 0em;
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
  </React.Fragment>
)

export default TemplateWrapper
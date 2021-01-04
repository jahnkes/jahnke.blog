import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalSyles } from "./GlobalStyles"
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
      <script async defer data-domain="jahnke.blog" src="https://plausible.io/js/plausible.js"></script>
    </Helmet>
    <Header />
    <div id="content">{children}</div>
    <Footer />
    <style jsx>{`
      #content {
        margin: 1.5rem auto;
        max-width: 40rem;
        width: 90%;
      }
    `}</style>
    <GlobalSyles />
  </React.Fragment>
)

export default TemplateWrapper

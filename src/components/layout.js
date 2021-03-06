/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import Footer from "./Footer/Footer"
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }, props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1140,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



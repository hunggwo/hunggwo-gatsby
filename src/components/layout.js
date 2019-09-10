/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{

          backgroundColor: `lightslategrey`,
          padding: `1rem 1rem 1.45rem 1rem`,
        }}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
              display: `flex`,
              justifyContent: `space-between`,
              color: `white`,
            }}
          >
            <span>電話：04-23145649</span>
            <span>信箱：hunggwo@seed.net.tw</span>
            <span>地址：<a style={{ color: `white`}} href="https://goo.gl/maps/ocQCtCFU1pVnhvF4A">台中市西區忠明路59號</a>, 403</span>
          </div>
          
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

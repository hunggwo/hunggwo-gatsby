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
              color: `white`
            }}

            class="row"
          >
            <div class="col-12 col-sm-12 col-md-4" style={{ textAlign: `center `}}>
              <span>電話：<a style={{ color: `white`}} href="tel:+886423145649">04-23145649</a></span>
            </div>
            <div class="col-12 col-sm-12 col-md-4" style={{ textAlign: `center `}}>
              <span>信箱：<a style={{ color: `white`}} href="mailto:hunggwo@seed.net.tw">hunggwo@seed.net.tw</a></span>
            </div>
            <div class="col-12 col-sm-12 col-md-4" style={{ textAlign: `center `}}>
              <span>地址：<a style={{ color: `white`}} href="https://goo.gl/maps/ocQCtCFU1pVnhvF4A">台中市西區忠明路59號</a></span>
            </div>
          </div>
          
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

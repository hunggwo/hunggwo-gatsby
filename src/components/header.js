import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./hunggwo-logo-only.svg"

import facebook from './facebook.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightslategrey`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{
        textAlign: `center`,
        marginBottom: `40px` 
      }} >
        <img src={logo} style={{
          margin: 0,
        }} />
        <h1 style={{ }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          
        </h1>
      </div>


      <div
        style={{
          marginTop: `8px`,
          textAlign: `center`,
        }}
      >
  
        <Link to="/about" style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `10px`,
          backgroundColor: `rgba(0,0,0,0.3)`,
          padding: `10px 15px`,
          margin: `0 2%`,
        }}>關於弘國</Link>


        <a href="https://www.facebook.com/弘國廣告-107647353951765/" 
          style={{
            backgroundColor: `white`,
            height: `41px`,
            textDecoration: `none`,
            padding: `10px`,
            margin: `0 2%`,
          }}>
            <img src={facebook} style={{
              margin: `0 2px 0 0`,
              height: `26px`,
            }} /> 
            <span>幫我們按讚！</span>  
        </a>

        
         
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

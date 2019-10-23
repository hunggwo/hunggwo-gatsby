import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./hunggwo-logo-only.svg"

import facebook from './facebook.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `lightslategrey`,
      backgroundImage: `url("/photos/IMG_6051.JPG")`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
      backgroundSize: `cover`,
      backgroundColor: `rgba(255,255,255,0.3)`,
      backgroundBlendMode: `overlay`,
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
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          
        </h1>
        <p style={{ 
          textAlign: `center`,
          background: `rgba(255,222,0,1)`,
          borderRadius: `10px`,
          padding: `2px 6px`,
        }}>二十年在地經營，與各大企業合作豐富，提供最好品質、最值得信賴的廣告夥伴</p>
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

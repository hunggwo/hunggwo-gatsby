import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./hunggwo-logo-only.svg"

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
      }} >
        <img src={logo} style={{
          margin: 0,
        }} />
        <h1 style={{ margin: 0 }}>
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
        <p>二十年經營老店，與各大企業皆有合作，最直得信賴的廣告夥伴
        </p>
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
          "margin-right": `10px`,
        }}>關於弘國</Link>

        <Link to="/product"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >實際案例</Link>
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

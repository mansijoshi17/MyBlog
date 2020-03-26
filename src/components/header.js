import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, icon }) => (
  <>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display:'flex'
      }}
    >
      <h1>
    <img src={icon}/>
      </h1>
      <h1 style={{ marginTop: '30px' }} >
        <Link
          to="/"
          className="header-title"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

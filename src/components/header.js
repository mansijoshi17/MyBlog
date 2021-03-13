import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle, icon }) => {

  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      pathPrefix 
    }
  }
`)

return (
  <>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem`,
        display:'flex',
        maxHeight:'100px'
      }}
    >
      <h1>
    <img src={icon}/>
      </h1>
      <h1 style={{ marginTop: '30px' }} >
        <Link
          to={`${data.site.pathPrefix}`}
          className="header-title"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </>

)
    }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

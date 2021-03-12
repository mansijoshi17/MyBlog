import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="description">
      <h1 className="hellomsg">Hello people!! </h1>
      <p className="hellomsg">Welcome to my blog, I am Mansi. I'm a web designer / developer based in Ahmedabad, India. I have a passion for web design and developement. </p>
  
     <Link className="hellomsg" to="ipfs/QmWTZChz5eYNDZtqW53VdYPgcCru7Xqt2e8f3airHjvbEe/Bloglist">Click here to read my thoughts on some technologies.</Link>
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link, graphql } from "gatsby"


const BlogList = ({ data }) => {

  return (
    <div className="container">
      <h1 className="desfont">My Thoughts on new technologies.</h1>
      <div className="blogs">
        <ul>
          {
            data.allMarkdownRemark.edges.map((node,index) => {
              return <li key={index} className="post">
                <Link className="post desfont" to={node.node.fields.slug}>{node.node.frontmatter.title}-{node.node.frontmatter.date}</Link>
                <p className="desfont" style={{marginTop:'20px'}}>{node.node.frontmatter.description}</p>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default BlogList;


export const query = graphql`
query{
    allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              title
              date
            }
            fields{
              slug
            }
            excerpt
          }
        }
      }
}`

import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>

            <Link to="/Bloglist">
                <img src="https://img.icons8.com/bubbles/100/000000/circled-left.png" />
            </Link>
        </Layout>
    )

}

export const query = graphql`
   query($slug: String!)
   {
       markdownRemark(fields: {slug:{eq: $slug}}){
           html
           frontmatter{
               title
           }
       }
   }
`
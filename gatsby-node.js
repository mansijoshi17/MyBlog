const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "MarkdownRemark") {

        const slug = createFilePath({
            node,
            getNode
        })

        // Creates new query'able field with name of 'slug'
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions
    return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
    }`).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path :node.fields.slug,
                component : path.resolve(`./src/templates/Blog-post.js`),
                context: {
                    slug : node.fields.slug
                }
            })
        })
    })
}
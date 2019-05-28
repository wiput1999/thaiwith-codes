const _ = require('lodash')
const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const blogCategory = path.resolve(`./src/templates/blog-categories.tsx`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
                banner {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 90) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog posts

  posts.map((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Fetch all unique categories

  const categories = []

  posts.map(post => {
    post.node.frontmatter.category.split(',').map(cat => {
      const catTrim = _.trim(cat)
      const catKey = _.toLower(catTrim)

      if (_.isEmpty(_.filter(categories, o => o.key === catKey))) {
        categories.push({
          key: catKey,
          name: catTrim,
          banner: post.node.frontmatter.banner
        })
      }
    })
  })

  // Create category page

  createPage({
    path: '/categories',
    component: blogCategory,
    context: {
      categories: _.sortBy(categories, o => o.key)
    },
  })

  return null
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

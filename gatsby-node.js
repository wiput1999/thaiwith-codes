const _ = require('lodash')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const categoryList = path.resolve(`./src/templates/categories-list.tsx`)
  const authorList = path.resolve(`./src/templates/authors-list.tsx`)
  const categoryPost = path.resolve(`./src/templates/categories-posts.tsx`)
  const authorPost = path.resolve(`./src/templates/authors-posts.tsx`)

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
        allAuthorsJson {
          edges {
            node {
              user
              name
              facebook
              twitter
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
  const authors = result.data.allAuthorsJson.edges

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

  let postsPerPage = 12

  // Create category page

  createPage({
    path: '/categories',
    component: categoryList,
    context: {
      categories: _.sortBy(categories, o => o.key)
    },
  })

  // Create category blog listing page
  const categoryBlogRaw = []

  const fetchCategoryBlog = async category => {
    const categoryResult = await graphql(`
      {
        blogs: allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          filter: {frontmatter: {category: {regex: "/${category.name}/"}}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
                author
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
    `)

    return categoryBlogRaw.push({
      category,
      raw: categoryResult.data,
    })
  }

  await Promise.all(categories.map(category => fetchCategoryBlog(category)))

  categoryBlogRaw.map(o => {
    const categoryListingPages = Math.ceil(o.raw.blogs.edges.length / postsPerPage)

    _.times(categoryListingPages, i => createPage({
      path: i === 0 ? `/category/${o.category.key}` : `/category/${o.category.key}/pages/${i + 1}`,
      component: categoryPost,
      context: {
        pathPrefix: `/category/${o.category.key}`,
        category: o.category,
        query: o.category.key,
        currentPage: i + 1,
        numPages: categoryListingPages,
        regex: `/${o.category.name}/`,
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    }))
  })

  // Create author pages

  let authorPathPrefix = '/author/'

  _.each(authors, async author => {
    const authorResult = await graphql(
      `
        {
          blogs: allMarkdownRemark(
            filter: {frontmatter: {author: {regex: "/${author.node.user}/"}}}
          ) {
            edges {
              node {
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    )

    let totalCount = authorResult.data.blogs.edges.length

    let authorPages = Math.ceil(totalCount / postsPerPage)
    let pathPrefix = authorPathPrefix + author.node.user
    _.times(authorPages, i => {
      createPage({
        path: i === 0 ? pathPrefix : `${pathPrefix}/pages/${i + 1}`,
        component: authorPost,
        context: {
          author: author.node.user,
          currentPage: i + 1,
          limit: postsPerPage,
          numPages: authorPages,
          pathPrefix,
          regex: `/${author.node.user}/`,
          skip: i * postsPerPage,
        },
      })
    })
  })

  // Create author list page
  const authorRaw = []
  const authorPromise = []

  const fetchAuthor = async author => {
    const authorResult = await graphql(
      `
        {
          author: file(relativePath: {eq: "${author.node.user}.jpg"}) {
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
      `
    )

    return authorRaw.push({
      user: author.node.user,
      name: author.node.name,
      facebook: author.node.facebook,
      twitter: author.node.twitter,
      banner: authorResult.data.author,
    })
  }

  _.each(authors, author => {
    authorPromise.push(fetchAuthor(author))
  })

  await Promise.all(authorPromise)

  createPage({
    path: '/authors',
    component: authorList,
    context: {
      authors: _.sortBy(authorRaw, o => o.name),
    },
  })

  return null
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
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

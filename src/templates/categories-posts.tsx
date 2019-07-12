import React from 'react'

import Helmet from 'react-helmet'

import {graphql} from 'gatsby'

import {FluidObject} from 'gatsby-image'

import {Box, Flex, Link} from 'rebass'

import {App} from '../components/app'
import {BlogCard} from '../components/blog-card'
import {Title} from '../components/title'

interface IProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            subtitle: string
            banner: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
          }
        }
      }[]
    }
  }
  pageContext: {
    category: {
      key: string
      name: string
    }
  }
}

export default class CategoryPostsPage extends React.Component<IProps> {
  public render() {
    const {category} = this.props.pageContext

    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <App>
        <Helmet title={category.name} />
        <Title title={`CATEGORY/${category.name.toUpperCase()}`} />
        <Flex alignItems="center">
          <Box mx="auto" width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <Flex flexWrap="wrap" width={1} px={20}>
              {posts.map((post, i) => (
                <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={[0, 1, 2, 2]} py={[2, 0, 0, 0]} key={`posts-${i}`}>
                  <Link href={`${post.node.fields.slug}`}>
                    <BlogCard
                      heading={post.node.frontmatter.title}
                      subtitle={post.node.frontmatter.subtitle}
                      fluid={post.node.frontmatter.banner.childImageSharp.fluid}
                      width={1}
                    />
                  </Link>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </App>
    )
  }
}

export const pageQuery = graphql`
  query categoryPageQuery($limit: Int!, $regex: String!, $skip: Int!) {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {category: {regex: $regex}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
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
    allAuthorsJson {
      edges {
        node {
          user
          name
          facebook
        }
      }
    }
  }
`

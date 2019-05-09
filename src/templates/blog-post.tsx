import React from 'react'

import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import { FluidObject } from 'gatsby-image'

import { Box, Flex } from 'rebass'

import { App } from '../components/app'
import { BlogCard } from '../components/blog-card'

interface PropsInterface {
  location: {
    pathname: string
  }
  pageContext: {
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
  data: {
    site: {
      siteMetadata: {
        author: string
        description: string
        title: string
        siteUrl: string
        fbApp: string
      }
    }
    markdownRemark: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        subtitle: string
        author: string
        date: string
        featured: boolean
        status: string
        banner: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
      html: string
    }
  }
}

class BlogPostTemplate extends React.Component<PropsInterface> {
  public render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext


    return (
      <App>
        <Helmet title={post.frontmatter.title} />
        <Flex>
          <BlogCard width={1} borderRadius={0} heading={post.frontmatter.title} fluid={this.props.data.markdownRemark.frontmatter.banner.childImageSharp.fluid} />
        </Flex>
        <Box px={10} py={20}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </App>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`

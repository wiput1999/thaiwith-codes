import React from 'react'

import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

import { Box, Heading } from 'rebass'

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 400px;
`
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
    const { banner, title } = this.props.data.markdownRemark.frontmatter

    return (
      <>
        <Helmet title={post.frontmatter.title} />
        <div style={{ position: 'relative', background: 'rgba(0,0,0,0.3)' }}>
          <BgImage fluid={banner.childImageSharp.fluid} />
          <Box style={{ position: 'absolute', left: '3%', bottom: '5%' }}>
            <Heading color='white' fontSize={42}>{title}</Heading>
          </Box>
        </div>
        <Box px={[50, 150, 200, 250]} py={20}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </>
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

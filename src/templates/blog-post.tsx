import { graphql } from 'gatsby'
import React from 'react'

import { Box, Flex } from 'rebass'

import { BlogCard } from '../components/blog-card'
import { Nav } from '../components/nav'

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
      <>
        <Nav />
        <Flex pb={20}>
          <BlogCard width={1} borderRadius={0} heading={post.frontmatter.title} image={'https://storage.rayriffy.com/files/image/hayasaka.jpg'} />
        </Flex>
        <Box px={10}>
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
        description
      }
    }
  }
`

import { graphql, Link } from 'gatsby'
import React from 'react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

interface PropsInterface {
  location: {
    pathname: string
  },
  pageContext: {
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    };
  }
  data: {
    site: {
      siteMetadata: {
        author: string;
        description: string;
        title: string;
        siteUrl: string;
        fbApp: string;
      };
    };
    markdownRemark: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        subtitle: string;
        author: string,
        date: string;
        featured: boolean;
        status: string;
      };
      html: string;
    };
  }
}

class BlogPostTemplate extends React.Component<PropsInterface> {
  public render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
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
    markdownRemark(fields: {slug: {eq: $slug}}) {
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

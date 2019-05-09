import React from 'react'
import { Box, Flex, Heading } from 'rebass'
import { BlogCard } from './blog-card'

import { graphql, Link, StaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

interface FeaturedInterface {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export class Featured extends React.Component<FeaturedInterface> {
  public render() {
    const featured = {
      desc: 'very gud',
      image: this.props.file,
      title: 'First Featured Article!!!!',
    }
    const featuredLists = [
      {
        desc: 'very long list',
        title: 'title',
      },
      {
        desc: 'very long list',
        title: 'title',
      },
      {
        desc: 'very long list',
        title: 'title',
      },
      {
        desc: 'very long list',
        title: 'title',
      },
    ]
    return (
      <>
        <StaticQuery
          query={graphql`
            query FeaturedQuery {
              allMarkdownRemark(
                sort: {fields: [frontmatter___date], order: DESC}
                limit: 5
              ) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      subtitle
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
          `}
          render={data => {
            const featuredBlog = data.allMarkdownRemark.edges[0]
            const featuredList = data.allMarkdownRemark.edges.slice(1, 5)
            return (
              <>
                <Flex alignItems='center'>
                  <Box mx='auto' mt={50} width={20 / 24}>
                    <Heading mb={4}>FEATURED ARTICLES</Heading>
                  </Box>
                </Flex>
                <Flex alignItems='center'>
                  <Box mx='auto' width={[1, 1, 20 / 24, 20 / 24]}>
                    <Flex flexWrap='wrap'>
                      <Box width={[1, 1, 1, 4 / 10]}>
                        <Link to={featuredBlog.node.fields.slug}>
                          <BlogCard
                            heading={featuredBlog.node.frontmatter.title}
                            subtitle={featuredBlog.node.frontmatter.subtitle}
                            fluid={featuredBlog.node.frontmatter.banner.childImageSharp.fluid}
                            width={1}
                            borderRadius={[0, 0, 8, 8]}
                          />
                        </Link>
                      </Box>
                      <Box width={[1, 1, 1, 6 / 10]}>
                        <Flex flexWrap='wrap'>
                          {featuredList.map((list, i) => (
                            <Link to={list.node.fields.slug}>
                              <Box width={12 / 24} px={[2, 5, 2, 5]} py={4} key={`featured-list-${i}`}>
                                <Heading>{list.node.frontmatter.title}</Heading>
                                {list.node.frontmatter.subtitle}
                              </Box>
                            </Link>
                          ))}
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </>
            )
          }}
        />
      </>
    )
  }
}

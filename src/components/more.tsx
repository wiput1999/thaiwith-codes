import React from 'react'

import { graphql, StaticQuery } from 'gatsby'

import { FluidObject } from 'gatsby-image'

import { Box, Button, Flex } from 'rebass'

import { TileBlogCard } from './blog-card'
import { Title } from './title'

interface MoreInterface {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
export class More extends React.Component<MoreInterface> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}
              limit: 10
              skip: 5
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "DD MMMM, YYYY")
                    title
                    subtitle
                    banner {
                      childImageSharp {
                        fluid(maxWidth: 600, quality: 75) {
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
          return (
            <>
              <Title title={`MORE`} />
              {data.allMarkdownRemark.edges.length === 0 ? null : (
                <Flex alignItems='center'>
                  <Box mt={50} mx='auto' width={20 / 24}>
                    <Flex flexWrap='wrap'>
                      {data.allMarkdownRemark.edges.map(edge => (
                        <TileBlogCard
                          slug={edge.node.fields.slug}
                          width={[1, 1 / 2]}
                          fluid={edge.node.frontmatter.banner.childImageSharp.fluid}
                          heading={edge.node.frontmatter.title}
                          subtitle={edge.node.frontmatter.subtitle}
                        />
                      ))}
                    </Flex>
                    <Flex justifyContent='center'>
                      <Button>MORE</Button>
                    </Flex>
                  </Box>
                </Flex>
              )}
            </>
          )
        }}
      />
    )
  }
}

import React from 'react'

import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import { FluidObject } from 'gatsby-image'

import { Box, Flex, Heading } from 'rebass'

import { BlogCard } from '../components/blog-card'

interface CategoriesInterface {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

export default class CategoriesPage extends React.Component<CategoriesInterface> {
  public render() {
    const blogsMock = [{
      heading: 'Category 1',
      image: 'https://storage.rayriffy.com/files/image/hayasaka.jpg',
      subtitle: 'subtitle'
    },
    {
      heading: 'Title',
      image: 'https://storage.rayriffy.com/files/image/kaguya.jpg',
      subtitle: 'subtitle'
    }]
    return (
      <>
        <Helmet title={`Categories`} />
        <Flex alignItems='center'>
          <Box mt={50} mx='auto' width={20 / 24}>
            <Heading mb={4}>CATEGORIES</Heading>
          </Box>
        </Flex>
        <Flex alignItems='center'>
          <Box mt={50} mx='auto' width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <Flex flexWrap='wrap' width={1} px={20}>
              {blogsMock.map((blog, i) => (
                <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={[0, 1, 2, 2]} py={[2, 0, 0, 0]} key={`category-${i}`}>
                  <BlogCard heading={blog.heading} fluid={this.props.data.file.childImageSharp.fluid} subtitle={blog.subtitle} width={1} />
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </>
    )
  }
}

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "hayasaka.jpg"}) {
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

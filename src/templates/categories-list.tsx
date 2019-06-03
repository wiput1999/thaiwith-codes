import React from 'react'

import Helmet from 'react-helmet'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import { FluidObject } from 'gatsby-image'

import { Box, Flex } from 'rebass'

import { App } from '../components/app'
import { BlogCard } from '../components/blog-card'
import { Title } from '../components/title'

interface CategoriesInterface {
  pageContext: {
    categories?: {
      key: string,
      name: string,
      banner: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }[]
  }
}

export default class CategoriesListPage extends React.Component<CategoriesInterface> {
  public render() {
    const { categories = [] } = this.props.pageContext

    return (
      <App>
        <Helmet title={`Categories`} />
        <Title title={`CATEGORIES`} />
        <Flex alignItems='center'>
          <Box mx='auto' width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <Flex flexWrap='wrap' width={1} px={20}>
              {categories.map((category, i) => (
                <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={[0, 1, 2, 2]} py={[2, 0, 0, 0]} key={`category-${i}`}>
                  <Link to={`category/${category.name.toLowerCase()}`}>
                    <BlogCard heading={category.name} fluid={category.banner.childImageSharp.fluid} width={1} />
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

import React from 'react'

import Helmet from 'react-helmet'

import { Link } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { Box, Flex } from 'rebass'

import { App } from '../components/app'
import { BlogCard } from '../components/blog-card'
import { Title } from '../components/title'

interface CategoriesInterface {
  pageContext: {
    authors?: {
      user: string
      name: string
      facebook: string
      twitter: string
      banner: {
        childImageSharp: {
          fluid: FluidObject
        }
      }
    }[]
  }
}

export default class AuthorsListPage extends React.Component<CategoriesInterface> {
  public render() {
    const { authors = [] } = this.props.pageContext

    return (
      <App>
        <Helmet title={`Authors`} />
        <Title title={`AUTHORS`} />
        <Flex alignItems="center">
          <Box mx="auto" width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <Flex flexWrap="wrap" width={1} px={20}>
              {authors.map(author => (
                <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={[0, 1, 2, 2]} py={[2, 0, 0, 0]} key={`author-${author.user}`}>
                  <Link to={`author/${author.user}`}>
                    <BlogCard heading={author.name} fluid={author.banner.childImageSharp.fluid} width={1} />
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

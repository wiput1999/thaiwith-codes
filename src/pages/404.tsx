import React from 'react'

import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import { Box, Flex, Heading } from 'rebass'

interface NotFoundPageProp {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: {
    pathname: string
  }
}

class NotFoundPage extends React.Component<NotFoundPageProp> {
  public render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <>
        <Helmet title={`Not Found`} />
        <Flex alignItems='center'>
          <Box mt={50} mb={50} mx='auto' width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <Heading mb={4}>NOT FOUND</Heading>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Box>
        </Flex>
      </>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'

import Helmet from 'react-helmet'

import { App } from '../components/app'
import { Title } from '../components/title'

import { Box, Flex } from 'rebass'

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
    return (
      <>
        <Helmet title={`Not Found`} />
        <Title title={`NOT FOUND`} />
        <Flex alignItems='center'>
          <Box mx='auto' width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Box>
        </Flex>
      </>
    )
  }
}

export default NotFoundPage

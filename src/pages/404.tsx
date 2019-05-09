import React from 'react'

import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

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
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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

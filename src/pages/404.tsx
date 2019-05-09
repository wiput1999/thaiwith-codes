import { graphql } from 'gatsby'
import React from 'react'

import { App } from '../components/app'

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
      <App>
        {/* <SEO title='404: Not Found' /> */}
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </App>
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

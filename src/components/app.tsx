import React from 'react'

import { graphql, StaticQuery } from 'gatsby'

import Helmet from 'react-helmet'

import { Footer } from './footer'
import { Nav } from './nav'

export class App extends React.Component {
  public render () {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <Helmet defaultTitle={`${data.site.siteMetadata.title}`} titleTemplate={`%s · ${data.site.siteMetadata.title}`} />
              <Nav />
              {children}
              <Footer />
            </>
          )
        }}
      />
    )
  }
}
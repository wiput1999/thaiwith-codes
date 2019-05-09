import React from 'react'

import Helmet from 'react-helmet'

import { Footer } from './footer'
import { Nav } from './nav'

export class App extends React.Component {
  public render() {
    const { children } = this.props
    return (
      <>
        <Helmet defaultTitle="thaiwith.codes" titleTemplate="%s · thaiwith.codes" />
        <Nav />
        {children}
        <Footer />
      </>
    )
  }
}
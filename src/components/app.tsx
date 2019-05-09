import React from 'react'

import { Footer } from './footer'
import { Nav } from './nav'

export class App extends React.Component {
  public render() {
    const { children } = this.props
    return (
      <>
        <Nav />
        {children}
        <Footer />
      </>
    )
  }
}
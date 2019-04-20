import React from 'react'

import { Featured } from '../components/featured'
import { Footer } from '../components/footer'
import { More } from '../components/more'
import { Nav } from '../components/nav'

export default class MockPage extends React.Component {
  public render() {
    return (
      <>
        <Nav />
        <Featured />
        <More />
        <Footer />
      </>
    )
  }
}

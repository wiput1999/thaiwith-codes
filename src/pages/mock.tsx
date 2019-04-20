import React from 'react'

import { Box, Button, Card, Flex, Heading, Image, Link, Text } from 'rebass'

import Featured from '../components/featured'
import { Footer } from '../components/footer'
import { Nav } from '../components/nav'

export default class MockPage extends React.Component {
  public render() {
    return (
      <div>
        <Nav />
        <>
          <Featured />
          <Text>More</Text>
        </>
        <Footer />
      </div>
    )
  }
}

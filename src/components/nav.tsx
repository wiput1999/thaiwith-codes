import React from 'react'

import { Box, Button, Card, Flex, Heading, Image, Link, Text } from 'rebass'

export class Nav extends React.Component {
  public render() {
    return (
      <Flex px={2} alignItems='center'>
        <Heading fontSize={28} mx={2} my={3} fontWeight={500}>
          thaiwith.codes
        </Heading>
        <Box mx='auto' />
        <Link href='/' p={2} px={3} style={{ textDecoration: 'none', fontSize: '15px' }} color='#000'>
          Home
        </Link>
        <Link href='/category' p={2} px={3} style={{ textDecoration: 'none', fontSize: '15px' }} color='#000'>
          Categories
        </Link>
        <Link href='/' p={2} px={3} style={{ textDecoration: 'none', fontSize: '15px' }} color='#000'>
          Authors
        </Link>
      </Flex>
    )
  }
}

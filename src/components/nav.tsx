import React from 'react'

import { Box, Flex, Heading, Link } from 'rebass'

export class Nav extends React.Component {
  public render() {
    const navLinks = [
      {
        href: '/',
        name: 'Home',
      },
      {
        href: '/categories',
        name: 'Categories',
      },
      {
        href: '/authors',
        name: 'Authors',
      }
    ]

    return (
      <Flex px={2} alignItems='center'>
        <Heading fontSize={28} mx={2} my={3} fontWeight={500}>
          thaiwith.codes
        </Heading>
        <Box mx='auto' my={0} />
        {navLinks.map((link, i) => (
          <Link href={link.href} p={2} px={3} style={{ textDecoration: 'none', fontSize: '15px' }} color='#000' key={`nav-${i}`}>
            {link.name}
          </Link>
        ))}
      </Flex>
    )
  }
}

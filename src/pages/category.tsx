import React from 'react'

import { Box, Flex, Heading } from 'rebass'

import { BlogCard } from '../components/blog-card'
import { Nav } from '../components/nav'

export default class CategoryPage extends React.Component {
  public render() {
    const blogsMock = [{
      heading: 'Title',
      image: 'https://storage.rayriffy.com/files/image/hayasaka.jpg',
      subtitle: 'subtitle'
    },
    {
      heading: 'Title',
      image: 'https://storage.rayriffy.com/files/image/hayasaka.jpg',
      subtitle: 'subtitle'
    }]
    return (
      <>
        <Nav />
        <Flex alignItems='center'>
          <Box mt={50} mb={50} mx='auto' width={[22 / 24, 22 / 24, 22 / 24, 20 / 24]}>
            <Heading mb={4}>CATEGORIES</Heading>
            <Flex flexWrap='wrap' width={1} px={20}>
              {blogsMock.map(blog => (
                <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={[0, 1, 2, 2]} py={[2, 0, 0, 0]}>
                  <BlogCard heading={blog.heading} image={blog.image} subtitle={blog.subtitle} width={1} />
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </>
    )
  }
}
import React from 'react'
import { Box, Card, Flex, Heading, Text } from 'rebass'
import BlogCard from './blogcard'

export default function featured() {
  return (
    <>
      <Flex alignItems='center'>
        <Box mt={75} mb={50} mx='auto' width={20 / 24}>
          <Heading mb={4}>FEATURED ARTICLES</Heading>
          <Flex>
            <BlogCard
              heading='First Featured Article'
              subtitle='Subtitle'
              image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
              width={4 / 10}
            />
            <Flex flexWrap='wrap' width={6 / 10} px={20}>
              <Box width={12 / 24} px={5} py={4}>
                <Heading>Title</Heading>
                Desc
              </Box> 
              <Box width={12 / 24} px={5} py={4}>
                <Heading>Title</Heading>
                Desc
              </Box>
              <Box width={12 / 24} px={5} py={4}>
                <Heading>Title</Heading>
                Desc
              </Box>
              <Box width={12 / 24} px={5} py={4}>
                <Heading>Title</Heading>
                Desc
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

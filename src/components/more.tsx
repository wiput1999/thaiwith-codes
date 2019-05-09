import React from 'react'

import { Box, Button, Card, Flex, Heading, Image, Link, Text } from 'rebass'

import { TileBlogCard } from './blog-card'

export class More extends React.Component {
  public render() {
    return (
      <>
        <Flex alignItems='center'>
          <Box mt={50} mb={50} mx='auto' width={20 / 24}>
            <Heading mb={4}>MORE</Heading>
            <Flex flexWrap='wrap'>
              <TileBlogCard
                width={[1, 1 / 2]}
                image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
                heading='Title'
                subtitle='Subtitle'
              />
              <TileBlogCard
                width={[1, 1 / 2]}
                image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
                heading='Title'
                subtitle='Subtitle'
              />
              <TileBlogCard
                width={[1, 1 / 2]}
                image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
                heading='Title'
                subtitle='Subtitle'
              />
              <TileBlogCard
                width={[1, 1 / 2]}
                image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
                heading='Title'
                subtitle='Subtitle'
              />
              <TileBlogCard
                width={[1, 1 / 2]}
                image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
                heading='Title'
                subtitle='Subtitle'
              />
              <TileBlogCard
                width={[1, 1 / 2]}
                image='https://storage.rayriffy.com/files/image/hayasaka.jpg'
                heading='Title'
                subtitle='Subtitle'
              />
            </Flex>
            <Flex justifyContent='center'>
              <Button>MORE</Button>
            </Flex>
          </Box>
        </Flex>
      </>
    )
  }
}

import React from 'react'
import { Box, Card, Flex, Heading, Text } from 'rebass'

export default function featured() {
  return (
    <>
      <Flex alignItems='center'>
        <Box mt={75} mb={50} mx='auto' width={20 / 24}>
          <Heading mb={4}>FEATURED ARTICLES</Heading>
          <Box width={10 / 24}>
            <Card
              px={4}
              pb={4}
              pt={'45%'}
              backgroundImage='url(https://source.unsplash.com/random/1024x768)'
              backgroundSize='cover'
              borderRadius={8}
              color='white'
              bg='darkgray'
            >
              <Heading>First Featured Article</Heading>
              <Text fontSize={20}>Subtitle</Text>
            </Card>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

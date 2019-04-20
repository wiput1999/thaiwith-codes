import React from 'react'

import { Box, Button, Card, Flex, Heading, Image, Link, Text } from 'rebass'

export class More extends React.Component {
  public render() {
    return (
      <>
        <Flex alignItems='center'>
          <Box mb={50} mx='auto' width={20 / 24}>
            <Heading mb={4}>MORE</Heading>
            <Flex flexWrap='wrap'>
              <Box width={[1, 1 / 2]} px={20} py={10}>
                <Flex>
                  <Box width={2 / 10}>
                    <Image src='https://storage.rayriffy.com/files/image/hayasaka.jpg' borderRadius={8} />
                  </Box>
                  <Box width={8 / 10} px={20}>
                    <Heading>Title</Heading>
                    Desc
                  </Box>
                </Flex>
              </Box>
              <Box width={[1, 1 / 2]} px={20} py={10}>
                <Flex>
                  <Box width={2 / 10}>
                    <Image src='https://storage.rayriffy.com/files/image/hayasaka.jpg' borderRadius={8} />
                  </Box>
                  <Box width={8 / 10} px={20}>
                    <Heading>Title</Heading>
                    Desc
                  </Box>
                </Flex>
              </Box>
              <Box width={[1, 1 / 2]} px={20} py={10}>
                <Flex>
                  <Box width={2 / 10}>
                    <Image src='https://storage.rayriffy.com/files/image/hayasaka.jpg' borderRadius={8} />
                  </Box>
                  <Box width={8 / 10} px={20}>
                    <Heading>Title</Heading>
                    Desc
                  </Box>
                </Flex>
              </Box>
              <Box width={[1, 1 / 2]} px={20} py={10}>
                <Flex>
                  <Box width={2 / 10}>
                    <Image src='https://storage.rayriffy.com/files/image/hayasaka.jpg' borderRadius={8} />
                  </Box>
                  <Box width={8 / 10} px={20}>
                    <Heading>Title</Heading>
                    Desc
                  </Box>
                </Flex>
              </Box>
              <Box width={[1, 1 / 2]} px={20} py={10}>
                <Flex>
                  <Box width={2 / 10}>
                    <Image src='https://storage.rayriffy.com/files/image/hayasaka.jpg' borderRadius={8} />
                  </Box>
                  <Box width={8 / 10} px={20}>
                    <Heading>Title</Heading>
                    Desc
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </>
    )
  }
}

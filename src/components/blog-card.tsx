import React from 'react'
import { Box, Card, Flex, Heading, Image, Text } from 'rebass'

interface BlogCardInterface {
  width: number | number[]
  image: string
  heading: string
  subtitle: string,
  borderRadius?: number | number[]
}

export function BlogCard({ width, image, heading, subtitle, borderRadius = 8 }: BlogCardInterface) {
  return (
    <Card width={width} backgroundImage={`url(${image})`} backgroundSize='cover' borderRadius={borderRadius}>
      <Card px={4} pb={4} pt={'45%'} color='white' bg='rgba(0,0,0,0.2)' borderRadius={borderRadius}>
        <Heading>{heading}</Heading>
        <Text fontSize={20}>{subtitle}</Text>
      </Card>
    </Card>
  )
}

export function TileBlogCard({ width, image, heading, subtitle }: BlogCardInterface) {
  return (
    <Box width={width} px={20} py={10}>
      <Flex>
        <Box width={4 / 10}>
          <Image src={image} borderRadius={8} />
        </Box>
        <Box width={6 / 10} px={20}>
          <Heading>{heading}</Heading>
          {subtitle}
        </Box>
      </Flex>
    </Box>
  )
}

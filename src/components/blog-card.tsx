import React from 'react'
import { Box, Card, Flex, Heading, Image, Text } from 'rebass'

import Img, {FluidObject} from 'gatsby-image'

interface BlogCardInterface {
  width: number | number[]
  fluid: FluidObject
  heading: string
  subtitle?: string,
  borderRadius?: number | number[]
}

export function BlogCard({ width, fluid, heading, subtitle, borderRadius = 8 }: BlogCardInterface) {
  return (
    <Card width={width} borderRadius={borderRadius}>
      <Card borderRadius={borderRadius} style={{zIndex: 1, position:'absolute'}} >
        <Img fluid={fluid} />
        </Card>
      <Card px={4} pb={4} pt={'45%'} color='white' bg='rgba(0,0,0,0.2)' borderRadius={borderRadius} style={{zIndex: 2, position:'absolute'}} >
        <Heading>{heading}</Heading>
        {subtitle && <Text fontSize={20}>{subtitle}</Text>}
      </Card>
    </Card>
  )
}

export function TileBlogCard({ width, fluid, heading, subtitle }: BlogCardInterface) {
  return (
    <Box width={width} px={20} py={10}>
      <Flex>
        <Box width={4 / 10}>
          <Img fluid={fluid} style={{borderRadius: '8px'}} />
        </Box>
        <Box width={6 / 10} px={20}>
          <Heading>{heading}</Heading>
          {subtitle}
        </Box>
      </Flex>
    </Box>
  )
}

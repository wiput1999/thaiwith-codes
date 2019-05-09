import React from 'react'
import { Box, Card, Flex, Heading, Text } from 'rebass'

import Img, { FluidObject } from 'gatsby-image'
import styled from 'styled-components';


const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};
`

interface BlogCardInterface {
  width: number | number[]
  fluid: FluidObject
  heading: string
  subtitle?: string,
  borderRadius?: number | number[]
}

export function BlogCard({ fluid, heading, subtitle, borderRadius = 8 }: BlogCardInterface) {
  return (
    <Card color='white' bg='rgba(0,0,0,0.3)' borderRadius={borderRadius} style={{ position: 'relative' }}>
      <BgImage fluid={fluid} style={{ borderRadius: '8px' }} />
      <Box style={{ position: 'absolute', left: '3%', bottom: '5%' }}>
        <Heading>{heading}</Heading>
        {subtitle && <Text fontSize={20}>{subtitle}</Text>}
      </Box>
    </Card>
  )
}

export function TileBlogCard({ width, fluid, heading, subtitle }: BlogCardInterface) {
  return (
    <Box width={width} px={20} py={10}>
      <Flex>
        <Box width={4 / 10}>
          <Img fluid={fluid} style={{ borderRadius: '8px' }} />
        </Box>
        <Box width={6 / 10} px={20}>
          <Heading>{heading}</Heading>
          {subtitle}
        </Box>
      </Flex>
    </Box>
  )
}

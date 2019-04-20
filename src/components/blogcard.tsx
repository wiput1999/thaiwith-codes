import React from 'react'
import { Card, Heading, Text } from 'rebass'

interface BlogCardInterface {
  width: number
  image: string
  heading: string
  subtitle: string
}

export default function BlogCard({ width, image, heading, subtitle }: BlogCardInterface) {
  return (
    <Card width={width} backgroundImage={`url(${image})`} backgroundSize='cover' borderRadius={8}>
      <Card px={4} pb={4} pt={'45%'} color='white' bg='rgba(0,0,0,0.2)' borderRadius={8}>
        <Heading>{heading}</Heading>
        <Text fontSize={20}>{subtitle}</Text>
      </Card>
    </Card>
  )
}

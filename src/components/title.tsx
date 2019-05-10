import React from 'react'

import { Box, Flex, Heading } from 'rebass'

interface BlogCardInterface {
  title: string
}

export function Title({ title }: BlogCardInterface) {
  return (
    <Flex alignItems='center'>
      <Box mx='auto' width={20 / 24} style={{marginTop: '50px'}}>
        <Heading mb={4}>{title}</Heading>
      </Box>
    </Flex>
  )
}

import React from 'react'

import { Box, Flex } from 'rebass'

import { BlogCard } from '../components/blog-card'
import { Nav } from '../components/nav'

export default class ContentPage extends React.Component {
    public render() {
        return (
            <>
                <Nav />
                <Flex pb={20}>
                    <BlogCard width={1} borderRadius={0} heading='TITLE' image={'https://storage.rayriffy.com/files/image/hayasaka.jpg'} />
                </Flex>
                <Box px={10}>
                    RAW CONTENT FROM MARKDOWN
                </Box>
            </>
        )
    }
}
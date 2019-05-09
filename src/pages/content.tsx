import React from 'react'

import { Flex } from 'rebass'

import { BlogCard } from '../components/blog-card'
import { Nav } from '../components/nav'

export default class ContentPage extends React.Component {
    public render() {
        return (
            <>
                <Nav />
                <Flex>
                    <BlogCard width={1} borderRadius={0} heading='TITLE' image={'https://storage.rayriffy.com/files/image/hayasaka.jpg'} />
                </Flex>
            </>
        )
    }
}
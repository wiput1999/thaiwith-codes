import React from 'react'
import { Box, Flex, Heading } from 'rebass'
import { BlogCard } from './blog-card'

import { FluidObject } from 'gatsby-image'

interface FeaturedInterface {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export class Featured extends React.Component<FeaturedInterface> {
  public render() {
    const featured = {
      desc: 'very gud',
      image: this.props.file,
      title: 'First Featured Article!!!!',
    }
    const featuredLists = [
      {
        desc: 'very long list',
        title: 'title',
      },
      {
        desc: 'very long list',
        title: 'title',
      },
      {
        desc: 'very long list',
        title: 'title',
      },
      {
        desc: 'very long list',
        title: 'title',
      },
    ]
    return (
      <>
        <Flex alignItems='center'>
          <Box mx='auto' mt={50} width={20 / 24}>
            <Heading mb={4}>FEATURED ARTICLES</Heading>
          </Box>
        </Flex>
        <Flex alignItems='center'>
          <Box mx='auto' width={[1, 1, 20 / 24, 20 / 24]}>
            <Flex flexWrap='wrap'>
              <Box width={[1, 1, 1, 4 / 10]}>
                <BlogCard
                  heading={featured.title}
                  subtitle={featured.desc}
                  fluid={featured.image.childImageSharp.fluid}
                  width={1}
                  borderRadius={[0, 0, 8, 8]}
                />
              </Box>
              <Box width={[1, 1, 1, 6 / 10]}>
                <Flex flexWrap='wrap'>
                  {featuredLists.map((list, i) => (
                    <Box width={12 / 24} px={[2, 5, 2, 5]} py={4} key={`featured-list-${i}`}>
                      <Heading>{list.title}</Heading>
                      {list.desc}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </>
    )
  }
}

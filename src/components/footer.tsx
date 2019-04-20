import React from 'react'

import { Box, Flex, Heading, Link, Text } from 'rebass'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

export class Footer extends React.Component {
  public render() {
    return (
      <>
        <Flex alignItems='center' bg='#393a3a'>
          <Box mt={75} mb={50} mx='auto' color='white' width={18 / 24}>
            <Flex flexWrap='wrap'>
              <Box px={5} mb={4} width={[1, 1, 1 / 2, 1 / 2]}>
                <Box>
                  <Heading fontSize={32} mb={20} fontWeight={600}>
                    thaiwith.codes
                  </Heading>
                  Any desc that make this stupid more than ever before in Thailand with your stupid mind in 2019 and ever in
                  the future
                </Box>
                <Box mt={4}>
                  <Heading fontSize={20} mb={20} fontWeight={600}>
                    MENU
                  </Heading>
                  <ul style={{ listStyle: 'none', margin: 0 }}>
                    <li style={{ borderBottom: '#505152 1px solid', padding: '10px 10px 10px 12px' }}>
                      <Link href='/' color='white' style={{ textDecoration: 'none' }}>
                        Home
                      </Link>
                    </li>
                    <li style={{ borderBottom: '#505152 1px solid', padding: '10px 10px 10px 12px' }}>
                      <Link href='/' color='white' style={{ textDecoration: 'none' }}>
                        About
                      </Link>
                    </li>
                    <li style={{ borderBottom: '#505152 1px solid', padding: '10px 10px 10px 12px' }}>
                      <Link href='/' color='white' style={{ textDecoration: 'none' }}>
                        Catrgory
                      </Link>
                    </li>
                    <li style={{ borderBottom: '#505152 1px solid', padding: '10px 10px 10px 12px' }}>
                      <Link href='/' color='white' style={{ textDecoration: 'none' }}>
                        Author
                      </Link>
                    </li>
                  </ul>
                </Box>
              </Box>
              <Box px={5} width={[1, 1, 1 / 2, 1 / 2]}>
                <Heading fontSize={20} mb={20} fontWeight={600}>
                  TWEETS
                </Heading>
                <div
                  style={{
                    border: '#505152 solid 1px',
                    borderRadius: '10px',
                    marginTop: '20px'
                  }}
                >
                  <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='HitenKei'
                    theme='dark'
                    options={{ height: 400 }}
                    noHeader={true}
                    noFooter={true}
                    noBorders={true}
                    transparent={true}
                  />
                </div>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box bg='#28292a' py={3}>
          <Text textAlign='center' color='#fff'>
            © Copyright 2019{new Date().getFullYear() > 2019 ? `-${new Date().getFullYear()}` : ''} | thaiwith.codes All
            Rights Reserved
          </Text>
        </Box>
      </>
    )
  }
}

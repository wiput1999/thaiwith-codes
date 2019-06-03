import React from 'react'

import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { App } from '../components/app'
import { Featured } from '../components/featured'
import { More } from '../components/more'

interface IndexPageInterface {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

export default class IndexPage extends React.Component<IndexPageInterface> {
  public render () {
    const { file } = this.props.data
    return (
      <App>
        <Featured file={file} />
        <More file={file} />
      </App>
    )
  }
}

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "hayasaka.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
  }
`

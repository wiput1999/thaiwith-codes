import React from 'react'

import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

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
  public render() {
    const { file } = this.props.data
    return (
      <>
        <Featured file={file} />
        <More file={file} />
      </>
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

import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Flex, Box } from 'components/UI/Base'

const Bleed = styled(Flex)`
  position: relative;
`

const ImgWrapper = styled(Box)`
  position: relative;
  width: 100%;
`

const TextWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`

const Text = styled('h2')`
  margin: auto;
  font-size: 3rem;
  font-weight: 800;
  color: white;
`

export default ({fullBleedCoverImage, text}) => (
  <Bleed>
    <ImgWrapper>
      <Img fluid={fullBleedCoverImage.childImageSharp.fluid} />
    </ImgWrapper>

    <TextWrapper>
      <Text>{ text }</Text>
    </TextWrapper>
  </Bleed>
)

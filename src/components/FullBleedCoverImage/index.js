import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Flex, Box } from 'components/UI/Base'
import { BREAKPOINT } from 'constants/responsive'

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

const Text = styled('h1')`
  margin: auto;
  font-size: 1.7rem;
  font-weight: 800;
  color: white;
  text-align: center;

  @media (min-width: ${BREAKPOINT-100}px) {
    flex-direction: column;
    font-size: 2.5rem;
  }

  @media (min-width: ${BREAKPOINT}px) {
    flex-direction: column;
    font-size: 3rem;
  }
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

import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Flex, Box } from 'components/UI/Base'
import { BREAKPOINT } from 'constants/responsive'

const Bleed = styled(Flex)`
  position: relative;
  max-height: 700px;;
`

const ImgWrapper = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const TitleWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: rgba(1, 55, 96, 0.75);
`

const PaddingTitleWrapper = styled(Flex)`
  padding: 40px 40px 0 40px;
  width: 100%;
`

const Title = styled('h1')`
  margin: auto;
  font-size: 1.4rem;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  color: white;
  text-align: center;
  text-shadow: 0 0 1px #575757;

  @media (min-width: ${BREAKPOINT-100}px) {
    flex-direction: column;
    font-size: 2.5rem;
  }

  @media (min-width: ${BREAKPOINT}px) {
    flex-direction: column;
    font-size: 4rem;
    max-width: ${BREAKPOINT}px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const OnlyTitle = styled(Title)`
  color: #013760;
  text-shadow: none;
`

export default ({fullBleedCoverImage, text}) => {
  const Wrapper = fullBleedCoverImage ? TitleWrapper : PaddingTitleWrapper
  const Text = fullBleedCoverImage ? Title : OnlyTitle

  return (
    <Bleed>
      {
        fullBleedCoverImage && (
          <ImgWrapper>
            <Img fluid={fullBleedCoverImage.childImageSharp.fluid} />
          </ImgWrapper>
        )
      }

      <Wrapper>
        <Text>{ text }</Text>
      </Wrapper>
    </Bleed>
  )
}

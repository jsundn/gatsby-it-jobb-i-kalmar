import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import Img from 'gatsby-image'
import SectionLogo from 'components/Partners/SectionLogo'

const Wrapper = styled(Flex)`
  display: flex;
  padding: 0 0 40px 0;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 650px) {
    max-width: none;
  }
`

const WrapperInner = styled(Flex)`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
` 

const Section = styled(Flex)`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0 70px 0;
  filter: grayscale(100%);
  padding: 60px 0;
  border-bottom: 2px solid whitesmoke;

  &:last-child {
    border-bottom: 0;
  }

  @media (min-width: 650px) {
    flex-direction: row;
  }
`

const TitleWrapper = styled(Flex)`
  padding: 20px;
  margin: 0 -20px;
  background-color: rgb(0, 55, 96);
  font-family: "Titillium Web", sans-serif;
`

const Title = styled('h2')`
  line-height: 1.3;
  margin: auto;
  padding: 0;
  font-family: Titillium Web,sans-serif;
  font-weight: 700;
  color: white;
  font-size: 1.4em;

  @media (min-width: 650px) {
    padding: 20px 40px;
    font-size: 2em;
  }
`

const Logos = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            description,
            subheader
          }
        }

        allDataJson {
          edges {
            node {
              partners {
                title,
                items {
                  name,
                  logo {
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        srcWebp
                        srcSetWebp
                        aspectRatio
                        src
                        srcSet
                        sizes
                      }
                    }
                  }
                  description,
                  level
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let { title, items } = data.allDataJson.edges[0].node.partners

      items = items.filter(item => item.logo)

      let arrays = []
      let levelIndex = 0
      let lastLevel

      const addPartnerToLevelArray = (idx, partner) => {
        if (!Array.isArray(arrays[idx])) {
          arrays[idx] = [partner]
        } else {
          arrays[idx].push(partner)
        }
      }

      items.forEach((partner, index) => {
        if (!lastLevel) {
          lastLevel = partner.level
        }

        if (partner.level === lastLevel) {
          addPartnerToLevelArray(levelIndex, partner)
        } else {
          lastLevel = partner.level
          levelIndex++

          addPartnerToLevelArray(levelIndex, partner)

        }
      })

      return (
        <Fragment>
          <TitleWrapper>
            <Title>{ title }</Title>
          </TitleWrapper>

          <Wrapper>
            <WrapperInner>
              { arrays.map((partners, index) => {
                return <Section key={`companies-levels-${index}`}>
                  { partners.map((partner, index) => {
                    if (partner.logo.childImageSharp) {
                      return <SectionLogo key={partner.name} {...partner} />
                    }

                    return null
                  }) }
                </Section>
              }) }
            </WrapperInner>
          </Wrapper>
        </Fragment>
      )

    }}
  />
)

export default Logos

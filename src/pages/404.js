import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import styled from 'styled-components'
import UFO from 'img/ufo.png'

const pageMetadata = {}
const StyledWrapper = styled('div')`
    text-align: center;
    padding: 20px 0 100px;
`

const UFOWrapper = styled('div')`
  margin: 40px 0 20px 0;
  -webkit-animation: action 1s infinite  alternate;
  animation: action 1s infinite  alternate;

  @-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px);
  }
  }
  @keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px);
  }
`

const NotFoundPage = ({data}) => (
  <Layout
    siteMetadata={data.site.siteMetadata}
    pageMetadata={pageMetadata}
    fullBleedCoverImage={null}
  >
    <StyledWrapper>
      <h1>404</h1>
      <UFOWrapper>
        <img src={UFO} />
      </UFOWrapper>
      <p>Ojdå. Den här sidan verkar inte finnas.</p>
    </StyledWrapper>
  </Layout>
)

export default NotFoundPage
export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        subheader,
        seo {
        	footer
        },
        social {
        	facebook
        }
      }
    }
  }
`

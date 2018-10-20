import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import styled from 'styled-components'

const pageMetadata = {}
const StyledWrapper = styled('div')`
    text-align: center;
    padding: 20px 0 100px;
`

const NotFoundPage = ({data}) => (
  <Layout
    siteMetadata={data.site.siteMetadata}
    pageMetadata={pageMetadata}
    fullBleedCoverImage={null}
  >
    <StyledWrapper>
      <h1>404</h1>
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

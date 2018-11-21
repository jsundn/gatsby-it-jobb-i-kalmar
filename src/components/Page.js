import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from 'components/Layout'
import rehypeReact from "rehype-react"
import CompaniesGrid from "components/CompaniesGrid"
import Grid from "components/Grid"
import GridItem, { GridItemLink } from "components/Grid/GridItem"
import Logos from "components/Partners/Logos"
import JobListings from 'components/JobListings'
import Leadin from 'components/UI/Leadin'

import Notification from 'components/Cookies/Notification'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "companies-grid": CompaniesGrid,
  	"grid": Grid,
  	"grid-item": GridItem,
  	"grid-item-link": GridItemLink,
  	"partners-logos": Logos,
    "job-listings": JobListings,
    "leadin": Leadin
  }
}).Compiler

const HTML = styled('div')`
	padding: 20px 0;

  @media (min-width: 380px) {
    padding: 40px 0;
  }
`

const Page = ({data, pageContext}) => {
	const { frontmatter, htmlAst } = pageContext.page.remark

	return <Layout
	    siteMetadata={data.site.siteMetadata}
	    pageMetadata={frontmatter}
	    fullBleedCoverImage={frontmatter.fullBleedCoverImage}
	  >

    <Notification />

		<HTML>
			{renderAst(htmlAst)}
		</HTML>
	</Layout>
}

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        description,
        subheader,
        googleSiteVerification,
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
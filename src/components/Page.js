import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from 'components/Layout'
import rehypeReact from "rehype-react"
import Grid from "components/Grid"
import GridItem, { GridItemLink } from "components/Grid/GridItem"
import Logos from "components/Partners/Logos"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
  	"grid": Grid,
  	"grid-item": GridItem,
  	"grid-item-link": GridItemLink,
  	"partners-logos": Logos
  }
}).Compiler

const HTML = styled('div')`
	padding: 20px;
`

const Page = ({data, pageContext}) => {
	const { frontmatter, htmlAst } = pageContext.page.remark

	return <Layout
	    siteMetadata={data.site.siteMetadata}
	    pageMetadata={frontmatter}
	    fullBleedCoverImage={frontmatter.fullBleedCoverImage}
	  >
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
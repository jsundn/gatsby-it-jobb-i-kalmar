import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import Job from './Job'
import { BREAKPOINT } from 'constants/responsive'

const Wrapper = styled('ul')`
	margin: 40px 0 0 0;
	list-style-type: none;
`

export default class JobListings extends Component {
	render() {
		return (
			<StaticQuery
			    query={graphql`
			      query {
			        allDataJson {
			          edges {
			            node {
			              listings {
			                title,
			                subtitle,
			                items {
			                  date,
			                  link,
			                  company,
			                  text,
			                  location,
			                  title
			                }
			              }
			            }
			          }
			        }
			      }
			    `}
			    render={data => {
			    	console.log("JEJEJEJE")
			      let { title, items } = data.allDataJson.edges[0].node.listings

			      const sorted = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

			      return (
			        <Wrapper>
								<p>Följ gärna vår <a href="https://www.facebook.com/itjobbikalmar/" target="_blank" rel="nofollow">Facebook sida</a> för att hålla dig uppdatera på vad som händer. Där delar vi alla nyheter och jobbmöjligheter som vi får in. Om ni har en jobbannons eller en nyhet som ni vill ska synas i vårt flöde så <a href="mailto:kontakt@itjobbikalmar.se">kontakta oss</a> gärna.</p>
			          { sorted.map((item, index) => (
			          	<Job
			          		key={`job-${index}`}
			          		date={item.date}
			          		link={item.link}
			          		company={item.company}
			          		text={item.text}
			          		location={item.location}
			          		title={item.title}
			          	/>
			          )) }
			        </Wrapper>
			      )

			    }}
			  />
		)
	}
}
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
			                  text
			                }
			              }
			            }
			          }
			        }
			      }
			    `}
			    render={data => {
			      let { title, items } = data.allDataJson.edges[0].node.listings

			      const sorted = items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

			      return (
			        <Wrapper>
			          { sorted.map((item, index) => (
			          	<Job
			          		key={`job-${index}`}
			          		date={item.date}
			          		link={item.link}
			          		company={item.company}
			          		text={item.text}
			          	/>
			          )) }
			        </Wrapper>
			      )

			    }}
			  />
		)
	}
}
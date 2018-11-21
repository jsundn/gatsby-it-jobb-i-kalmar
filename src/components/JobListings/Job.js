import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import { darken } from 'polished'
import { BREAKPOINT } from 'constants/responsive'
import JobPosting from 'components/SEO/Google/JobPosting'

const Wrapper = styled('li')`
	font-size: 1rem;
	line-height: 1.5rem;
	border-bottom: 1px solid #efefef;
	margin-bottom: 0;
	padding: 40px 20px;
`

const Row = styled(Flex)`
	flex-direction: column;

	@media (min-width: ${BREAKPOINT}px) {
		flex-direction: column;
	}
`

const CompanyName = styled('span')`
	font-weight: 600;
	display: inline;
	font-size: 14px;
`

const JobDate = styled(CompanyName)`
	font-weight: 300;
	font-size: 14px;
`

const Separator = styled(JobDate)`
	margin: 0 10px 0 10px;
`

const Footer = styled(Flex)`
	flex-direction: row;

	@media (min-width: ${BREAKPOINT}px) {
		margin-left: auto;
		padding-left: 20px;
	}
`

const Header = styled('div')`

`

const Title = styled('h3')`
	color: #013760;
	margin: 0;
`

const Link = styled('a')`
	margin: 10px 0 20px 0;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`

const Description = styled('p')`
	margin: 0;
	color: black;
	font-size: 15px;
	margin-bottom: 20px;
	line-height: 1.5rem;
	flex: 1;
	display: block;
	text-decoration: none;
	max-width: ${BREAKPOINT}px;
`

export default class Job extends Component {
	render() {
		const {
			date,
      		link,
      		company,
      		text,
      		location,
      		title
		} = this.props

		return (
			<Wrapper>
				<Row>
					<JobPosting description={text} date={date} company={company} location={location} title={title} />

					<Header>
						<JobDate>
							{date}
						</JobDate>
						<Separator> | </Separator>
						<CompanyName>
							{company}
						</CompanyName>
					</Header>

					<Link nofollow="true" href={link} target="_blank" rel="nofollow">
						<Title>
							{ title }
						</Title>
					</Link>

					<Description>
						{ text }
					</Description>
				</Row>
			</Wrapper>
		)
	}
}
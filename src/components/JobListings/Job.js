import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import { darken } from 'polished'
import { BREAKPOINT } from 'constants/responsive'
import JobPosting from 'components/SEO/Google/JobPosting'

const Wrapper = styled('li')`
	font-size: 1rem;
	line-height: 1.5rem;
	border-bottom: 2px solid #efefef;
	margin-bottom: 0;
	padding: 20px;
`

const Row = styled(Flex)`
	flex-direction: column;

	@media (min-width: ${BREAKPOINT}px) {
		flex-direction: row;
	}
`

const CompanyName = styled('span')`
	font-weight: 700;
	display: inline;
	font-size: 12px;

	@media (min-width: ${BREAKPOINT}px) {
		margin-left: auto;
	}
`

const JobDate = styled(CompanyName)`
	font-weight: 300;
`

const Separator = styled(JobDate)`
	margin: 0 5px;
`

const Footer = styled(Flex)`
	flex-direction: row;

	@media (min-width: ${BREAKPOINT}px) {
		margin-left: auto;
		padding-left: 20px;
	}
`

const DescriptionLink = styled('a')`
	margin: 0;
	color: #013760;
	font-size: 1.2rem;
	margin-bottom: 20px;
	line-height: 1.85rem;
	flex: 1;
	display: block;
	cursor: pointer;
	text-decoration: none;
	max-width: ${BREAKPOINT}px;

	&:hover {
	  text-decoration: underline;
	}

	&:visited {
		color: #8f044c;
	}
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

					<DescriptionLink href={link}>
						{ text }
					</DescriptionLink>

					<Footer>
						<JobDate>
							{ date }
						</JobDate>
						<Separator>|</Separator>
						<CompanyName>
							{ company }
						</CompanyName>
					</Footer>
				</Row>
			</Wrapper>
		)
	}
}
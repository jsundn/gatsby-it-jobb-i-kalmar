import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/UI/Base'
import Link from 'gatsby-link'
import { darken } from 'polished'

const StyledGridItem = styled(Flex)`
	flex: ${({flex}) => flex};
`

const Content = styled(Box)`
	margin: 20px;
	width: 100%;
	border-radius: 10px;
	overflow: hidden;

	${({aligntext}) => aligntext ? `
		text-align: ${aligntext}!important;
	`: ''};

	background-color: ${({background}) => background ? darken(0.1, background) : 'transparent'};
`

const Title = styled('h3')`
	margin: 0;
	padding: 40px;
	font-size: 40px;
	
	${({aligntext}) => aligntext ? `
		text-align: ${aligntext}!important;
	`: 'center'};

	background-color: ${({background}) => background || 'transparent'};
	color: white;
`

const TextLink = styled(Link)`
	margin: 0;
	padding: 40px;
	display: block;
	font-size: 20px;
	color: white;
	text-decoration: none;

	&:hover {
		text-decoration: underline;		
	}
`

const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const InnerContent = styled(Flex)`
	padding: 40px;
`

const GridItem = ({
	href,
	title,
	flex,
	aligntext,
	background,
	children
}) => (
	<StyledGridItem flex={flex}>
		<Content background={background} aligntext={aligntext}>
			<StyledLink to={href}>
				<Title background={background} aligntext={aligntext}>{title}</Title>
			</StyledLink>
			{children}
		</Content>
	</StyledGridItem>
)

export const GridItemLink = ({href, target, children}) => <TextLink to={href} target={target || "_blank"}>{children}</TextLink>

export default GridItem
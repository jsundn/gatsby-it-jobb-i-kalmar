import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/UI/Base'
import { Link } from "gatsby"
import { darken } from 'polished'
import { BREAKPOINT } from 'constants/responsive'

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
	padding: 20px;
	font-size: 1rem;
	font-weight: 900;

	@media (min-width: ${BREAKPOINT}px) {
		font-size: 1.5rem;
	}

	${({aligntext}) => aligntext ? `
		text-align: ${aligntext}!important;
	`: 'text-align: center;'};

	background-color: ${({background}) => background || 'transparent'};
	color: white;
`

const LinkStyle = `
	margin: 0;
	padding: 40px;
	display: block;
	font-size: 20px;
	color: white;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	&:visited {
		color: white;
	}
`

const TextLink = styled('a')`
	${LinkStyle}
`

const InternalTextLink = styled(Link)`
	${LinkStyle}
`

const StyledGatsbyLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const StyledNormalLink = styled('a')`
	color: white;
	text-decoration: none;
`

const InnerContent = styled(Flex)`
	padding: 40px;
`

const internal = (href) => href.indexOf('http') < 0

const GridItem = ({
	href,
	nofollow = false,
	title,
	flex,
	aligntext,
	background,
	children
}) => (
	<StyledGridItem flex={flex}>
		<Content background={background} aligntext={aligntext}>
			{ internal(href) ?
				<StyledGatsbyLink to={href}>
					<Title background={background} aligntext={aligntext}>{title}</Title>
					{children}
				</StyledGatsbyLink> :
				<StyledNormalLink nofollow="true" href={href} target="_blank">
						<Title background={background} aligntext={aligntext}>{title}</Title>
						{children}
				</StyledNormalLink>
			}
		</Content>
	</StyledGridItem>
)

export const GridItemLink = ({href, nofollow = false, target, children}) => console.log("GREF", href, internal(href)) || (
	internal(href) ? (
		<InternalTextLink nofollow to={href} target={target || "_blank"}>{children}</InternalTextLink>
	) : (
		<TextLink nofollow href={href} target={target || "_blank"}>{children}</TextLink>
	)
)

export default GridItem
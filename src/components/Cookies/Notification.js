import React, { Component } from 'react'
import styled from 'styled-components'
import cookie from 'react-cookies'
import character from 'img/girl.png'
import Flex from 'components/UI/Base/Flex'
import { Link } from "gatsby"
import t from 'format-message'
import { BREAKPOINT } from 'constants/responsive'
import {
	enable,
	disable
} from 'lib/GTM'

const StyledWrapper = styled('div')`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #e4f2f8;
	z-index: 1000;
	padding: 20px;

	@media (min-width: ${BREAKPOINT}px) {
	    bottom: 20px;
		left: 20px;
		right: auto;
		padding: 40px;
		border-radius: 20px;
		max-width: 400px;
	}
`

const Title = styled('p')`
	color: #333;
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 1.5;
	margin: auto 0 auto 10px;
`

const Character = styled('img')`
	height: 70px;
`

const Top = styled(Flex)`
	flex-direction: row;
`

const Text = styled('p')`
	font-size: 1rem;
	line-height: 1.5;
	color: #333;
	margin-bottom: 5px;
`

const BoldText = styled(Text)`
	font-weight: 700;
	font-size: 1.2rem;
`

const StyledLink = styled(Link)`
	font-size: 1rem;
	line-height: 1.5;
	color: #333;
	display: inline-block;
	margin: 20px 0;
	text-decoration: underline;
	margin-right: 20px;

	&:hover {
		text-decoration: none;
	}
`

const Accept = styled(Text)`
	background: #1aa01a;
	padding: 10px;
	color: white;
	display: inline;
	cursor: pointer;
	white-space: nowrap;
	border-radius: 0 10px 10px 0;

	&:hover {
		background: #1fba1f;
	}
`

const DoNotAccept = styled(Accept)`
	background: #333;
	border-radius: 10px 0 0 10px;

	&:hover {
		background: #666;
	}
`

export default class Notification extends Component {
	state = {
		display: false
	}

	handleAccept = () => {
		cookie.save('allowsCookies', true)

		enable()

		this.setState({
			display: false
		})
	}

	handleDoNotAccept = () => {
		cookie.save('allowsCookies', false)

		enable()

		this.setState({
			display: false
		})
	}

	componentDidMount() {
		const allowsCookies = cookie.load('allowsCookies')

		if (allowsCookies === undefined) {
			this.setState({
				display: true
			})
		} else if (allowsCookies) {
			enable()
		}
	}

	render() {
		if (this.state.display) {
			return (
				<StyledWrapper>
					<Top>
						<Character src={character} />
						<Title>{t('Kakor!')}</Title>
					</Top>

					<BoldText>{t('Ja vi måste fråga :)')}</BoldText>

					<Text>{t('Om vi får så sparar vi information om hur du använder siten. Vi sparar dock inget om dig som person. Detta gör att vi kan förstå dig som användare bättre och bygga en bättre site. Vill du veta mer så följ länken nedan.')}</Text>
					
					<StyledLink to={`/${t('integritetspolicy')}`}>{t('Här kan du läsa mer')}</StyledLink>

					<DoNotAccept onClick={this.handleDoNotAccept}t>{t('nej')}</DoNotAccept>
					<Accept onClick={this.handleAccept}t>{t('Det är okej!')}</Accept>
				</StyledWrapper>
			)
		} else {
			return null
		}
	}
}
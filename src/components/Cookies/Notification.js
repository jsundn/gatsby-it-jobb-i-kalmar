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
	background: #151515;
	z-index: 1000;
	padding: 20px;
`

const Title = styled('p')`
	color: white;
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
	color: white;
	margin: 20px 0 40px 0;
`

const BoldText = styled(Text)`
	font-weight: 700;
	font-size: 1.2rem;
`

const StyledLink = styled(Link)`
	font-size: 12px;
	line-height: 1.5;
	color: white;
	display: block;
	margin-top: 10px;
	text-decoration: none;
	font-style: italic;

	&:hover {
		text-decoration: underline;
	}

	&:visited {
		color: white;
	}
`

const Accept = styled(Text)`
	background: #3fa565;
	padding: 10px;
	color: white;
	display: inline;
	cursor: pointer;
	white-space: nowrap;
	margin: 0;

	&:hover {
		background: #47b770;
	}
`

const DoNotAccept = styled(Accept)`
	background: #333;
	cursor: pointer;

	&:hover {
		background: #444;
	}
`

const ButtonsWrapper = styled(Flex)`
	margin: 0;
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
						<Title>{t('Vi skulle vilja spara kakor')}</Title>
					</Top>

					<Text>{t('Om vi får så sparar vi information om hur du använder siten. Vi sparar dock inget om dig som person. Detta gör att vi kan förstå dig som användare bättre och bygga en bättre site. Vill du veta mer så följ länken nedan.')}</Text>
					
					<ButtonsWrapper>
						<DoNotAccept onClick={this.handleDoNotAccept}t>{t('nej')}</DoNotAccept>
						<Accept onClick={this.handleAccept}t>{t('Det är okej!')}</Accept>
					</ButtonsWrapper>

					<StyledLink to={`/${t('integritetspolicy')}`}>{t('Här kan du läsa mer')}</StyledLink>
				</StyledWrapper>
			)
		} else {
			return null
		}
	}
}
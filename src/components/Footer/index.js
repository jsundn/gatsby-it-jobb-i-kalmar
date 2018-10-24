import React from 'react'
import EU from 'img/eu.png'
import { Facebook, Instagram, Linkedin } from 'styled-icons/fa-brands'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import t from 'format-message'
import { BREAKPOINT } from 'constants/responsive'

const Wrapper = styled(Flex)`
	position: relative;
	background: #141516;
	padding: 60px;
	flex-direction: column;
`

const Title = styled('h3')`
	color: whitesmoke;
	font-size: 16px;
	font-weight: 700
	font-family: Titillium Web,sans-serif;
	max-width: 1200px;
	margin-bottom: 20px;
`

const Text = styled('p')`
	color: whitesmoke;
	font-size: 14px;
	line-height: 1.85;
	margin: 0 auto;
	font-family: Titillium Web,sans-serif;
	max-width: 1200px;
	margin-bottom: 40px;
`

const Seo = styled(Flex)`
	flex: 1;
	padding: 0 40px 0 0;
	flex-direction: column;

	@media (max-width: 600px) {
		padding: 0 0 40px 0;
	}
`

const SocialWrapper = styled(Flex)`
	text-align: center;
    align-self: center;
	color: white;
	flex-direction: column;

	@media (max-width: ${BREAKPOINT}px) {
		align-items: center;
	}

	@media (min-width: ${BREAKPOINT}px) {
		flex-direction: row;
	}
`

const Anchor = styled('a')`
	border: 1px solid transparent;
    border-radius: 50%;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    width: 95px;
    height: 95px;
    cursor: pointer;
    color: white;

    &:hover {
    	color: #adb0b2;
    }

    &:active, &:visited {
    	color: white;
    }
`

const Copy = styled('span')`
	color: white;
	margin: 30px 0 0;
	width: 100%;
	font-size: 14px;
	line-height: 1.85;
	font-family: Titillium Web,sans-serif;
	text-align: center;
	margin-bottom: 100px;
`

const EULogo = styled('img')`
	height: 40px;
	margin: 0 auto;

	@media (min-width: ${BREAKPOINT}px) {
		position: absolute;
		bottom: 40px;
		right: 0;
		margin: 0;

	}
`

const Footer = ({ siteMetadata }) => {
	const { title, seo, social } = siteMetadata

	return <Wrapper>
		<Seo>
			<Title>
				{ t('Om {title}', { title }) }
			</Title>

			<Text>
				{ seo.footer }
			</Text>
		</Seo>

		<SocialWrapper>
			<Anchor
				href={social.linkedin}
				rel="nofollow"
				title={t('Besök vår Linkedin')}
				target="_blank"
			>
				<Linkedin
					size={50}
				/>
			</Anchor>

			<Anchor
				href={social.facebook}
				rel="nofollow"
				title={t('Besök vår Facebook')}
				target="_blank"
			>
				<Facebook
					size={50}
				/>
			</Anchor>

			<Anchor
				href={social.instagram}
				rel="nofollow"
				title={t('Besök vår Instagram')}
				target="_blank"
			>
				<Instagram
					size={50}
				/>
			</Anchor>
		</SocialWrapper>

		<Copy>&copy; IT-jobb i Kalmar</Copy>

		<EULogo src={EU} alt="EU"/>

	</Wrapper>
}

export default Footer
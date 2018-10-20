import React from 'react'
import EU from 'img/eu.png'
import { Facebook, Instagram, Linkedin } from 'styled-icons/Feather'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import t from 'format-message'

const Wrapper = styled(Flex)`
	background: #151a20;
	padding: 60px;
	flex-direction: column;

	@media (max-width: 600px) {
		flex-direction: column;
	}
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

const SocialWrapper = styled('div')`
	text-align: center;
	color: white;

	a {
		padding: 5px;
		&:active, &:visited {
			color: white;
		}
		&:hover {
			cursor: pointer;
			color: #006058;
		}
	}
`

const Anchor = styled('a')`
	height: 50px;
`

const Copy = styled(Flex) `
	color: white;
	align-items: center;
	margin: 30px 0 0;
	p {
		color: whitesmoke;
		font-size: 14px;
		line-height: 1.85;
		font-family: Titillium Web,sans-serif;
		flex: 1;
	}
	img {
		height: 30px;
		width: auto;
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

		<Copy>
			<p>&copy; IT-jobb i Kalmar</p>
			<img src={EU} alt="EU"/>
		</Copy>

	</Wrapper>
}

export default Footer
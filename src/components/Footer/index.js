import React from 'react'
import { Facebook } from 'styled-icons/Feather'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import t from 'format-message'

const StyledFacebook = Facebook.extend`
	color: white;
`

const Wrapper = styled(Flex)`
	background: #013760;
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

const Anchor = styled('a')`
	height: 50px;
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

		<Anchor
			href={social.facebook}
			title={t('Besök vår Facebooksida')}
			target="_blank"
		>
			<StyledFacebook
				size={50}
			/>
		</Anchor>
	</Wrapper>
}

export default Footer
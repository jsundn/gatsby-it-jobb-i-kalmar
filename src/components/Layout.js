import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import InjectGlobalStyles from 'components/InjectGlobalStyles'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'
import FullBleedCoverImage from 'components/FullBleedCoverImage'
import { Flex } from 'components/UI/Base'
import Organization from 'components/SEO/Google/Organization'
import Breadcrumbs from 'components/SEO/Google/Breadcrumbs'
import { BREAKPOINT } from 'constants/responsive'

require('typeface-roboto')

const SiteWrapper = styled(Flex)`
  padding-top: 70px;
`

const Content = styled(Flex)`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 380px) {
    padding: 0 40px;
  }
`

const HeaderText = styled('h1')`
  @media (min-width: 650px) {
    padding: 20px 40px;
  }
`

const SubDescription = styled('p')`
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 300;
  max-width: 1280px;
  margin: 0 auto 20px auto;
  padding: 60px 40px 0 40px;

  @media (min-width: ${BREAKPOINT}px) {
    font-size: 2.5rem;
  }
`

const Layout = ({
  siteMetadata,
  pageMetadata,
  fullBleedCoverImage,
  children
}) => (
  <SiteWrapper flexDirection="column">
    <Helmet
        title={`${siteMetadata.title} | ${pageMetadata.title}`}
        meta={[
          { name: 'title', content: `${siteMetadata.title} | ${pageMetadata.title}` },
          { name: 'description', content: pageMetadata.description },
          { name: 'keywords', content: pageMetadata.keywords },
        ]}
    />

    <Organization />
    <Breadcrumbs name={pageMetadata.title} url={pageMetadata.path}  />

    <Header />

    <FullBleedCoverImage fullBleedCoverImage={fullBleedCoverImage} text={pageMetadata.description || siteMetadata.subheader} />

    { pageMetadata.subdescription && <SubDescription>{pageMetadata.subdescription}</SubDescription> }

    <Content flexDirection="column">
      {children}
    </Content>

    <Footer siteMetadata={siteMetadata} />
  </SiteWrapper>
);

Layout.propTypes = {
  metaData: PropTypes.object
}

export default Layout
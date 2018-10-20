import React, { Component } from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import Img from 'gatsby-image'

const WrapperInner = styled('div')`
	margin: auto;
	width: 100%;
`

const StyledImage = styled(Img)`
	width: 500px;
	max-width: 100%;
	margin: 0 auto;
	margin: auto;
`

const SectionLogo = ({ logo, description, level }) => {
    if (logo && logo.childImageSharp && logo.childImageSharp.fluid) {
        return (
            <Wrapper level={level}>
                <WrapperInner>
                    <StyledImage fluid={logo.childImageSharp.fluid} alt={description} />
                </WrapperInner>
            </Wrapper>
        )
    }

    return null
}

export default SectionLogo
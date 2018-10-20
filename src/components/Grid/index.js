import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import GridItem from './GridItem'

const StyledGrid = styled(Flex)`
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 60px;
`

const Grid = ({flexdirection, children}) => (
	<StyledGrid flexDirection={flexdirection || "row"}>
		{children}
	</StyledGrid>
)

export default Grid
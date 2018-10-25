import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import GridItem from './GridItem'
import { BREAKPOINT } from 'constants/responsive'

const StyledGrid = styled(Flex)`
	max-width: 1200px;
	margin: 0 auto;

	@media (max-width: ${BREAKPOINT}px) {
		flex-direction: column;
	}
`

const Grid = ({flexdirection, children}) => (
	<StyledGrid flexDirection={flexdirection || "row"}>
		{children}
	</StyledGrid>
)

export default Grid
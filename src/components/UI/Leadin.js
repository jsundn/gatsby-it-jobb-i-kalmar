import React from 'react'
import styled from 'styled-components'
// import { BREAKPOINT } from 'constants/responsive'

const StyledLeadin = styled('h3')`
	font-size: 1.3rem;
	line-height: 1.85;
	font-weight: 400;
	margin-bottom: 20px;
	text-align: center;
`

const Leadin = ({children}) => (
	<StyledLeadin>
		{children}
	</StyledLeadin>
)

export default Leadin
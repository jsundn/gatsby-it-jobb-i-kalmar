import React from 'react'
import styled from 'styled-components'
// import { BREAKPOINT } from 'constants/responsive'

const StyledLeadin = styled('p')`
	font-size: 1.3rem;
	line-height: 1.85;
	font-weight: 700;
	margin-top: 20px;
	margin-bottom: 40px;
`

const Leadin = ({children}) => (
	<StyledLeadin>
		{children}
	</StyledLeadin>
)

export default Leadin
import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/UI/Base'
import {
	GOLD,
	SILVER,
	BRONZE
} from 'constants/partners'

const Wrapper = styled(Flex, {
	shouldForwardProp: prop => prop === "level" ? false : true
})`
	margin: 20px auto;
	max-width: 90%;
	padding: 10px;
	background: white;

	${({level}) => {
		if (level === SILVER) {
			return `
				max-width: 65%
			`
		} else if (level === BRONZE) {
			return `
				max-width: 40%;
				display: inline;
			`
		}

		return ''
	}}

	@media (min-width: 350px) and (max-width: 650px) {
		${({level}) => {
			if (level === GOLD) {
				return `max-width: 75%;`
			} else if (level === SILVER) {
				return `max-width: 55%;`
			} else if (level === BRONZE) {
				return `max-width: 35%;`
			}
		}}
	}

	@media (min-width: 650px) {
		margin: 20px;

		${({level}) => {
			if (level === GOLD) {
				return `max-width: 350px;`
			} else if (level === SILVER) {
				return `max-width: 145px;`
			} else if (level === BRONZE) {
				return `max-width: 120px;`
			}
		}}
	}
`

export default Wrapper
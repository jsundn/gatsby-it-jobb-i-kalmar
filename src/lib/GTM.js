const push = payload => (
	window.dataLayer.push(payload)
)

export const addedFilteringTag = tag => {
	push({
		event: 'added-filtering-tag',
		tag
	})
}

export const addedFilteringInput = input => {
	push({
		event: 'added-filtering-input',
		input
	})
}

export const filteringNoHits = (tag, input) => {
	push({
		event: 'filtering-no-hits',
		tag,
		input
	})
}


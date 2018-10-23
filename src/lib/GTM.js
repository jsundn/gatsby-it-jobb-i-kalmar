const push = payload => (
	window.dataLayer.push(payload)
)

export const addedFilteringTag = tag => {
	return null;
	push({
		event: 'added-filtering-tag',
		tag
	})
}

export const addedFilteringInput = input => {
	return null;
	push({
		event: 'added-filtering-input',
		input
	})
}

export const filteringNoHits = (tag, input) => {
	return null;
	push({
		event: 'filtering-no-hits',
		tag,
		input
	})
}


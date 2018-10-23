let _enabled = false


const push = payload => {
	if (_enabled) {
		window.dataLayer.push(payload)
	}
}

export const enable = () => (
	_enabled = true
)

export const disable = () => (
	_enabled = false
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


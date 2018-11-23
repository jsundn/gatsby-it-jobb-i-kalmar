let _enabled = false

window.dataLayer = window.dataLayer || [];

const push = payload => {
	if (_enabled && window.dataLayer.push) {
		window.dataLayer.push(payload)
	}
}

export const enable = () => (
	_enabled = true
)

export const disable = () => (
	_enabled = false
)

export const pageView = frontmatter => {
	push({
		page: undefined,
		tag: undefined,
		input: undefined
	})
		
	  
	push({
		event: 'pageview',
		page: frontmatter
	})
}

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


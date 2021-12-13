function getOptions(path, page, apiKey) {
	return {
		href: 'https://api.themoviedb.org',
		protocol: 'https:',
		hostname: 'api.themoviedb.org',
		path: `/3/${path}?page=${page}`,
		port: 443,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${apiKey}`,
		},
	}
}

module.exports = { getOptions }

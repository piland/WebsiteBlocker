

function parseURL(url) {
	const urlRegex = /^(?:(?<protocol>[a-zA-Z][a-zA-Z0-9+.-]*):\/\/)?(?<host>[^/?#]+)(?<path>\/[^?#]*)?(?:\?(?<query>[^#]*))?(?:#(?<fragment>.*))?$/;
	const match = url.match(urlRegex);

	if (match) {
		const { protocol, host, path, query, fragment } = match.groups;
		...
	}
}

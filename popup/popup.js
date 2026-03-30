let paths = [];
let domains = [];

function parseURL(url) {
	const urlRegex = /^(?:(?<protocol>[a-zA-Z][a-zA-Z0-9+.-]*):\/\/)?(?<host>[^/?#]+)(?<path>\/[^?#]*)?(?:\?(?<query>[^#]*))?(?:#(?<fragment>.*))?$/;
	const match = url.match(urlRegex);

	if (match) {
		const { protocol, domain, path, query, fragment } = match.groups;
		...
	}
}

function initializeDynamicRules() {

}

class Blocker {
	// Parse incoming URLs
	// Add domain and paths to blocked and unblocked using storage.local
	
	function getDomainArray() {
		let domainArray = chrome.storage.local.get("domain");
		return domainArray;
	}

	function addDomain(domain) {
		let domainArray = getDomainArray();
		domainArray.push(domain);
		domains = domainArray;
		chrome.storage.local.set({ "domain": domainArray });
	}
	
	function getPathArray() {
		let pathArray = chrome.storage.local.get("path");
		return pathArray;
	}

	function addPath(path) {
		let pathArray = getPathArray();
		pathArray.push(path);
		paths = pathArray;
		chrome.storage.local.set({ "path": pathArray });
	}


	// updateDynamicRules()
}

const fetchHandler = async fetchEvent => {
	const { request } = fetchEvent;
	const pathChunk = URL.parse(request.url).pathname.split("/").splice(2, 0, "docs").join("/");
	return fetch("https://cdn.jsdelivr.net/gh/" + pathChunk)
}

self.addEventListener("fetch", e => e.respondWith(fetchHandler), true);
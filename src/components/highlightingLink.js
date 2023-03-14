const highlightingLink = () => {
	const anchorBlocks = document.querySelectorAll(".anchor"),
		links = {},
		observer = new IntersectionObserver(observerCallback, { rootMargin: "-49.9999% 0%" });

	document.querySelector(".nav__links").querySelectorAll(".nav__link").forEach((link) => {
		links[link.getAttribute('href').substring(1)] = link;
	})

	anchorBlocks.forEach((element) => observer.observe(element));

	function observerCallback(entries) {
		entries.forEach((entry) => {
			entry.isIntersecting ? links[entry.target.id].classList.add('text-other')
				: links[entry.target.id].classList.remove('text-other')
		});
	}
};

export default highlightingLink;

/** Prefixes a site path with the configured base, so links work under the GitHub Pages path. */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, "");
	return `${base}/${path.replace(/^\//, "")}`;
}

/** URL of a document's page. */
export function documentPath(id: string): string {
	return withBase(`documents/${id}/`);
}

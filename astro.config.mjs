// @ts-check
import { defineConfig } from "astro/config";

// Served by GitHub Pages under the repository path. After the transfer to the Stout organization
// only `site` changes: the path stays the repository name.
export default defineConfig({
	site: "https://m1gu3l4ngel.github.io",
	base: "/stout-documents-portal",
	trailingSlash: "always",
});

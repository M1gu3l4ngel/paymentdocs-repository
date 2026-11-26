// @ts-check
import { defineConfig } from "astro/config";

// Served by GitHub Pages of the stoutllc organization, under the repository path.
export default defineConfig({
	site: "https://stoutllc.github.io",
	base: "/paymentdocs-repository",
	trailingSlash: "always",
});

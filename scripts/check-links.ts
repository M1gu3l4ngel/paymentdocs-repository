// Checks that every internal link and asset in the built site (dist/) points to a file that exists.
// External links (Google Drive, IRS) are left out: they depend on third parties and rate limits.
// Usage: node scripts/check-links.ts (after pnpm build)

import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import config from "../astro.config.mjs";

const DIST = path.resolve("dist");
const BASE = `/${(config.base ?? "").replace(/^\/|\/$/g, "")}/`.replace(/^\/\/$/, "/");
const ATTRIBUTE =
	/\s(?:href|src|srcset)="([^"]+)"|http-equiv="refresh"\s+content="0;\s*url=([^"]+)"/g;

function listHtmlFiles(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) return listHtmlFiles(full);
		return entry.name.endsWith(".html") ? [full] : [];
	});
}

/** Splits an attribute value into the URLs it holds (srcset lists several, with descriptors). */
function urlsIn(value: string): string[] {
	return value
		.split(",")
		.map((part) => part.trim().split(/\s+/)[0] ?? "")
		.filter((url) => url.length > 0);
}

/** Maps a link found in a page to the file it needs in dist/, or null when it is not internal. */
function findTarget(url: string, page: string): string | null {
	if (/^(?:[a-z]+:|\/\/|#)/i.test(url)) return null;
	const clean = decodeURI(url.split(/[?#]/)[0] ?? "");
	let file: string;
	if (clean.startsWith("/")) {
		if (!clean.startsWith(BASE)) return path.join(DIST, "__outside_base__", clean);
		file = path.join(DIST, clean.slice(BASE.length));
	} else {
		file = path.resolve(path.dirname(page), clean);
	}
	return clean.endsWith("/") || clean === "" ? path.join(file, "index.html") : file;
}

if (!existsSync(DIST)) {
	console.log("dist/ does not exist: run pnpm build first.");
	process.exit(2);
}

const problems: string[] = [];
let checked = 0;
for (const page of listHtmlFiles(DIST)) {
	const html = readFileSync(page, "utf8");
	for (const match of html.matchAll(ATTRIBUTE)) {
		for (const url of urlsIn(match[1] ?? match[2] ?? "")) {
			const target = findTarget(url, page);
			if (target === null) continue;
			checked += 1;
			if (!existsSync(target)) problems.push(`${path.relative(DIST, page)}: ${url} does not exist`);
		}
	}
}

if (problems.length > 0) {
	for (const problem of problems) console.log(problem);
	process.exit(1);
}
console.log(`Internal links: ${checked} checked, all resolve`);

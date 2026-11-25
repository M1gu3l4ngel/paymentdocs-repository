import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** One page per document Stout asks subcontractors and suppliers for. */
const documents = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/documents" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			/** Short label used on cards and in the breadcrumb, e.g. "W-9" or "GL". */
			shortName: z.string(),
			/** Position in the list and in the previous/next navigation. */
			order: z.number().int().positive(),
			summary: z.string(),
			sendTo: z.email(),
			/** What the submitted document has to contain. */
			mustInclude: z.array(z.string()).default([]),
			notice: z.string().optional(),
			example: z.object({ src: image(), alt: z.string() }).optional(),
			downloads: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
			/** Shows the per-state supplier waiver templates below the content. */
			hasWaiverTemplates: z.boolean().default(false),
		}),
});

export const collections = { documents };

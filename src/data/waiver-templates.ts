/** The four supplier waiver variants, in the order the templates table shows them. */
export const WAIVER_TYPES = [
	{ file: "conditional-progress", label: "Conditional progress" },
	{ file: "unconditional-progress", label: "Unconditional progress" },
	{ file: "conditional-final", label: "Conditional final" },
	{ file: "unconditional-final", label: "Unconditional final" },
] as const;

export type WaiverType = (typeof WAIVER_TYPES)[number];

/**
 * States with supplier waiver templates. Each one has the four variants in
 * public/forms/waivers/<slug>/<type file>.pdf; scripts/check-links.ts fails the build if one is
 * missing.
 */
export const WAIVER_STATES = [
	{ name: "Arizona", slug: "arizona" },
	{ name: "California", slug: "california" },
	{ name: "Colorado", slug: "colorado" },
	{ name: "Idaho", slug: "idaho" },
	{ name: "Nevada", slug: "nevada" },
	{ name: "Oklahoma", slug: "oklahoma" },
	{ name: "Oregon", slug: "oregon" },
	{ name: "Utah", slug: "utah" },
	{ name: "Washington", slug: "washington" },
	{ name: "Wyoming", slug: "wyoming" },
] as const;

/** Site-relative path of a state's waiver template, to pass to withBase(). */
export function waiverTemplatePath(stateSlug: string, type: WaiverType): string {
	return `forms/waivers/${stateSlug}/${type.file}.pdf`;
}
